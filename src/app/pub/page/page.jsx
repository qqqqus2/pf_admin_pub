"use client";

import Link from "next/link";
import { pubRouter } from "@/constants/router";
import { useMemo } from "react";

/**
 * 퍼블리싱 index 화면
 * @returns React Component
 */
export default function PublishingList() {
    // PublishingList 자신을 제외
    const filteredRouter = useMemo(
        () => pubRouter.filter((r) => r && r.path && r.path !== "/pub/page"),
        []
    );

    // 가이드 페이지와 일반 페이지 분류
    const guidePages = useMemo(
        () =>
            filteredRouter.filter(
                (r) => r && r.path && r.path.startsWith("/pub/page/guide")
            ),
        [filteredRouter]
    );

    const nonGuidePages = useMemo(
        () =>
            filteredRouter.filter(
                (r) =>
                    r &&
                    r.path &&
                    r.path.startsWith("/pub/page") &&
                    !r.path.startsWith("/pub/page/guide")
            ),
        [filteredRouter]
    );

    // 카테고리별 페이지 데이터 구성
    const pageCategories = useMemo(
        () => [
            {
                cate: "Guide",
                list: [
                    ...guidePages,
                    {
                        path: "/mail.html",
                        element: "",
                        title: "_Guide_Mail",
                        depth1: "Guide",
                        depth2: "Mail",
                        depth3: "",
                        status: "완료",
                    },
                ],
            },
            {
                cate: "Page",
                list: nonGuidePages,
            },
        ],
        [guidePages, nonGuidePages]
    );

    // 통계 계산
    const calcStats = (items) => {
        const total = items.length;
        const completed = items.filter((item) => item.status === "완료").length;
        const inProgress = total - completed;
        const completionRate =
            total > 0 ? Math.round((completed / total) * 100) : 0;

        return { total, completed, inProgress, completionRate };
    };

    // depth1 기준으로 그룹화된 항목 렌더링
    const renderGroupedItems = (items) => {
        if (!items || items.length === 0) return null;

        let currentDepth1 = null;
        let rowIndex = 0;
        const rows = [];

        items.forEach((page, index) => {
            // depth1이 바뀌면 헤더 행 추가
            if (currentDepth1 !== page.depth1) {
                currentDepth1 = page.depth1;

                // 현재 depth1의 모든 항목 가져오기
                const depthItems = items.filter(
                    (i) => i.depth1 === currentDepth1
                );
                const stats = calcStats(depthItems);

                rows.push(
                    <tr key={`header-${currentDepth1}`} className="bg-gray-200">
                        <td colSpan={4} className="p-2">
                            <div className="flex justify-between items-center">
                                <span className="font-bold">
                                    {currentDepth1}
                                </span>
                                <span className="text-sm">
                                    완료: {stats.completed}/{stats.total} (
                                    {stats.completionRate}%)
                                </span>
                            </div>
                        </td>
                    </tr>
                );
                rowIndex = 1; // 새 그룹의 첫 번째 항목은 인덱스 1부터 시작
            } else {
                rowIndex++; // 같은 그룹의 다음 항목
            }

            // 실제 데이터 행 추가
            rows.push(
                <tr
                    key={`${index}-${page.title}`}
                    className={`border-b hover:bg-gray-100 ${
                        page.status === "완료" ? "bg-green-50" : "bg-yellow-50"
                    }`}
                >
                    <td className="pl-6 p-2">{rowIndex}</td>
                    <td className="p-2">
                        <Link
                            href={page.path}
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            {page.path}
                        </Link>
                    </td>
                    <td className="p-2">
                        <div className="flex flex-col">
                            {page.depth2 && (
                                <div className="text-sm">
                                    {page.depth2}
                                    {page.depth3 && (
                                        <span className="text-gray-500 ml-2">
                                            › {page.depth3}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </td>
                    <td className="p-2 text-center">
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                page.status === "완료"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                            }`}
                        >
                            {page.status}
                        </span>
                    </td>
                </tr>
            );
        });

        return rows;
    };

    return (
        <div className="p-5">
            {/* 전체 통계 정보 */}
            <div className="mb-4 p-4 bg-white border rounded shadow-sm">
                <h1 className="text-2xl font-bold mb-2">퍼블리싱 현황</h1>
                {pageCategories.map((category) => {
                    const stats = calcStats(category.list);
                    return (
                        <div key={`stats-${category.cate}`} className="mb-2">
                            <h2 className="text-lg font-semibold">
                                {category.cate}
                            </h2>
                            <div className="flex items-center mt-1">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-green-600 h-2.5 rounded-full"
                                        style={{
                                            width: `${stats.completionRate}%`,
                                        }}
                                    ></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">
                                    {stats.completionRate}% 완료 (
                                    {stats.completed}/{stats.total})
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 카테고리별 페이지 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pageCategories.map((category) => (
                    <div
                        key={category.cate}
                        className="border rounded shadow-sm"
                    >
                        <h2 className="text-xl font-bold p-3 bg-gray-100">
                            {category.cate} 화면 리스트 ({category.list.length})
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr className="border-b">
                                        <th className="p-2 text-left">No</th>
                                        <th className="p-2 text-left">경로</th>
                                        <th className="p-2 text-left">상세</th>
                                        <th className="p-2 text-center">
                                            상태
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderGroupedItems(category.list)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
