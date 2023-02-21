module.exports = {
	roots: ["<rootDir>/src/"],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
	transform: { "^.+\\.tsx?$": "ts-jest" },
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	globals: {
		"ts-jest": {
			isolatedModules: true,
		},
	},
};
