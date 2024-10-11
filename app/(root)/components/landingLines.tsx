"use client";
import { motion } from "framer-motion";

const LandingLines = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1183"
      fill="none"
      className={`max-md:scale-150`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="11%" stopColor="#141414" />
          <stop offset="33%" stopColor="#464646" />
          <stop offset="64%" stopColor="#989898" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1501.05 169.696L1536.85 205.465C1535.91 207.112 1536.13 209.226 1537.54 210.629C1539.23 212.32 1541.97 212.32 1543.64 210.629C1545.33 208.937 1545.33 206.199 1543.64 204.53C1542.24 203.128 1540.12 202.905 1538.47 203.84L1503.37 168.739V8.45809C1505.19 7.94615 1506.53 6.29905 1506.53 4.31808C1506.53 1.93646 1504.59 0 1502.21 0C1499.82 0 1497.89 1.93646 1497.89 4.31808C1497.89 6.29905 1499.25 7.96841 1501.05 8.45809V169.696Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1500.49 150.216C1500.49 147.834 1498.55 145.897 1496.17 145.897C1493.79 145.897 1491.85 147.834 1491.85 150.216C1491.85 152.197 1493.21 153.866 1495.01 154.356V216.567L1545.47 266.982V452.459C1543.64 452.971 1542.3 454.618 1542.3 456.599C1542.3 458.98 1544.24 460.917 1546.62 460.917C1549.01 460.917 1550.95 458.98 1550.95 456.599C1550.95 454.618 1549.59 452.948 1547.78 452.459V266.025L1497.33 215.61V154.356C1499.15 153.844 1500.49 152.197 1500.49 150.216Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1542.38 399.235C1542.38 396.853 1540.44 394.917 1538.06 394.917C1535.68 394.917 1533.74 396.853 1533.74 399.235C1533.74 401.216 1535.1 402.885 1536.9 403.375V617.654L1503.58 650.952V877.896C1501.75 878.408 1500.42 880.055 1500.42 882.036C1500.42 884.418 1502.35 886.354 1504.74 886.354C1507.12 886.354 1509.06 884.418 1509.06 882.036C1509.06 880.055 1507.72 878.386 1505.9 877.896V651.909L1539.22 618.611V403.375C1541.05 402.863 1542.38 401.216 1542.38 399.235Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1434.56 4.31808C1434.56 6.29906 1435.92 7.96842 1437.72 8.4581V238.095L1486.37 286.707V445.185C1484.55 445.697 1483.21 447.344 1483.21 449.325C1483.21 451.707 1485.15 453.643 1487.53 453.643C1489.91 453.643 1491.85 451.707 1491.85 449.325C1491.85 447.344 1490.49 445.675 1488.69 445.185V285.75L1440.04 237.138V8.4581C1441.87 7.94616 1443.2 6.29906 1443.2 4.31808C1443.2 1.93646 1441.26 0 1438.88 0C1436.47 0 1434.56 1.93646 1434.56 4.31808Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1367.89 545.925L1434.56 479.307V260.532L1411.15 237.116V8.45809C1412.97 7.94615 1414.31 6.29905 1414.31 4.31808C1414.31 1.93646 1412.37 0 1409.99 0C1407.61 0 1405.67 1.93646 1405.67 4.31808C1405.67 6.29905 1407.03 7.96841 1408.83 8.45809V238.095L1432.24 261.489V478.372L1365.57 544.991V837.574L1417.56 889.524C1416.63 891.171 1416.85 893.286 1418.25 894.688C1419.95 896.38 1422.69 896.38 1424.36 894.688C1426.05 892.997 1426.05 890.259 1424.36 888.589C1422.95 887.187 1420.84 886.965 1419.19 887.899L1367.87 836.617V545.925H1367.89Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1365.57 1015.04C1365.57 1013.06 1364.23 1011.39 1362.41 1010.9V918.638L1289.79 846.076V503.791L1247.22 461.255V216.483L1301.26 162.484V8.45809C1303.09 7.94616 1304.42 6.29905 1304.42 4.31808C1304.42 1.93646 1302.49 0 1300.1 0C1297.72 0 1295.78 1.93646 1295.78 4.31808C1295.78 6.29905 1297.14 7.96841 1298.94 8.45809V161.527L1244.9 215.526V462.212L1287.47 504.748V847.011L1360.09 919.573V1010.88C1358.26 1011.39 1356.93 1013.03 1356.93 1015.02C1356.93 1017.4 1358.87 1019.33 1361.25 1019.33C1363.63 1019.36 1365.57 1017.42 1365.57 1015.04Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1239.42 445.586V508.042C1237.6 508.554 1236.26 510.201 1236.26 512.182C1236.26 514.564 1238.2 516.5 1240.58 516.5C1242.96 516.5 1244.9 514.564 1244.9 512.182C1244.9 510.201 1243.54 508.554 1241.74 508.042V444.651L1145.64 348.629V130.232L1112.88 97.4906V5.54225L1143.44 36.0804C1142.5 37.7275 1142.72 39.8421 1144.13 41.2443C1145.82 42.9359 1148.56 42.9359 1150.23 41.2443C1151.92 39.5527 1151.92 36.815 1150.23 35.1456C1148.83 33.7434 1146.71 33.5208 1145.06 34.4556L1110.58 0V98.4255L1143.35 131.167V349.564L1239.42 445.586Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1153.01 615.633V458.958C1154.83 458.446 1156.17 456.799 1156.17 454.818C1156.17 452.436 1154.23 450.5 1151.85 450.5C1149.47 450.5 1147.53 452.436 1147.53 454.818C1147.53 456.799 1148.89 458.468 1150.69 458.958V616.59L1205.64 671.501V842.466L1170.96 877.122V1057.7C1169.13 1058.21 1167.8 1059.86 1167.8 1061.84C1167.8 1064.22 1169.74 1066.16 1172.12 1066.16C1174.5 1066.16 1176.44 1064.22 1176.44 1061.84C1176.44 1059.86 1175.1 1058.19 1173.28 1057.7V878.079L1207.96 843.423V670.544L1153.01 615.633Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1155.28 1137.16C1153.58 1138.85 1153.58 1141.59 1155.28 1143.26C1156.97 1144.95 1159.71 1144.95 1161.38 1143.26C1162.78 1141.86 1163.01 1139.74 1162.07 1138.09L1198.31 1101.9V1008.62C1200.14 1008.11 1201.48 1006.46 1201.48 1004.48C1201.48 1002.1 1199.54 1000.16 1197.16 1000.16C1194.77 1000.16 1192.83 1002.1 1192.83 1004.48C1192.83 1006.46 1194.19 1008.13 1196 1008.62V1100.94L1160.45 1136.47C1158.8 1135.56 1156.68 1135.76 1155.28 1137.16Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1017.27 323.678C1015.44 324.19 1014.11 325.837 1014.11 327.818C1014.11 330.199 1016.04 332.136 1018.43 332.136C1020.81 332.136 1022.75 330.199 1022.75 327.818C1022.75 325.837 1021.41 324.19 1019.59 323.678V202.994L1107.42 115.23V8.45809C1109.25 7.94615 1110.58 6.29905 1110.58 4.31808C1110.58 1.93646 1108.64 0 1106.26 0C1103.88 0 1101.94 1.93646 1101.94 4.31808C1101.94 6.29905 1103.3 7.96841 1105.1 8.45809V114.273L1017.27 202.037V323.678Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1094.38 273.503C1096.07 271.812 1096.07 269.074 1094.38 267.404C1092.69 265.713 1089.95 265.713 1088.28 267.404C1086.87 268.807 1086.65 270.921 1087.58 272.568L1029.04 331.063V593.264L1077.09 641.274C1076.16 642.921 1076.38 645.036 1077.78 646.438C1079.48 648.13 1082.22 648.13 1083.89 646.438C1085.58 644.747 1085.58 642.009 1083.89 640.34C1082.48 638.937 1080.37 638.715 1078.72 639.65L1031.34 592.306V331.998L1089.19 274.193C1090.84 275.106 1092.98 274.905 1094.38 273.503Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M1063.32 616.919L1034.52 588.14C1035.46 586.493 1035.24 584.378 1033.83 582.976C1032.14 581.284 1029.4 581.284 1027.73 582.976C1026.04 584.667 1026.04 587.405 1027.73 589.074C1029.13 590.477 1031.25 590.699 1032.9 589.764L1061.03 617.876V946.651L1090.17 975.765C1089.23 977.412 1089.45 979.527 1090.86 980.929C1092.55 982.621 1095.29 982.621 1096.96 980.929C1098.65 979.237 1098.65 976.5 1096.96 974.83C1095.56 973.428 1093.44 973.205 1091.79 974.14L1063.32 945.694V616.919Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M980.068 468.489C982.452 468.489 984.39 466.553 984.39 464.171C984.39 462.19 983.031 460.521 981.227 460.031V346.114L1010.94 316.399V229.882C1012.77 229.37 1014.11 227.723 1014.11 225.742C1014.11 223.36 1012.17 221.424 1009.78 221.424C1007.4 221.424 1005.46 223.36 1005.46 225.742C1005.46 227.723 1006.82 229.392 1008.63 229.882V305.226C1008.29 305.026 1007.94 304.87 1007.56 304.758V231.062L937.968 161.527V8.45813C939.794 7.9462 941.131 6.29906 941.131 4.31808C941.131 1.93646 939.193 0 936.809 0C934.426 0 932.488 1.93646 932.488 4.31808C932.488 6.29906 933.847 7.96845 935.651 8.45813V162.484L1005.24 232.019V304.758C1003.41 305.27 1002.08 306.917 1002.08 308.898C1002.08 311.28 1004.01 313.216 1006.4 313.216C1007.22 313.216 1007.98 312.972 1008.63 312.571V315.442L978.91 345.135V460.009C977.084 460.521 975.747 462.168 975.747 464.149C975.747 466.553 977.685 468.489 980.068 468.489Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M967.074 618.549L1009.98 575.68V474.138L944.687 408.922C945.623 407.275 945.4 405.16 943.996 403.758C942.304 402.066 939.564 402.066 937.893 403.758C936.2 405.45 936.2 408.187 937.893 409.857C939.296 411.259 941.413 411.482 943.061 410.547L1007.68 475.118V574.745L964.78 617.614V788.178C962.953 788.69 961.616 790.337 961.616 792.318C961.616 794.7 963.554 796.636 965.938 796.636C968.321 796.636 970.259 794.7 970.259 792.318C970.259 790.337 968.923 788.668 967.096 788.178V618.549H967.074Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M964.632 734.955C964.632 732.573 962.694 730.637 960.311 730.637C957.927 730.637 955.989 732.573 955.989 734.955C955.989 736.936 957.348 738.605 959.152 739.095V835.072L982.542 858.443C981.606 860.09 981.829 862.205 983.232 863.607C984.925 865.298 987.665 865.298 989.336 863.607C991.029 861.915 991.029 859.177 989.336 857.508C987.932 856.106 985.816 855.883 984.168 856.818L961.447 834.115V739.095C963.273 738.605 964.632 736.936 964.632 734.955Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M799.904 4.31808C799.904 6.29905 801.263 7.96841 803.068 8.45809V158.879L875.129 230.884V392.901L924.425 442.158C923.489 443.805 923.712 445.92 925.115 447.322C926.808 449.013 929.548 449.013 931.219 447.322C932.912 445.63 932.912 442.892 931.219 441.223C929.815 439.821 927.699 439.598 926.051 440.533L877.423 391.944V229.949L805.362 157.944V8.45809C807.188 7.94616 808.525 6.29905 808.525 4.31808C808.525 1.93646 806.587 0 804.204 0C801.842 0 799.904 1.93646 799.904 4.31808Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M888.462 391.048C890.288 390.536 891.625 388.889 891.625 386.908C891.625 384.527 889.687 382.59 887.304 382.59C884.92 382.59 882.982 384.527 882.982 386.908C882.982 388.889 884.341 390.559 886.145 391.048V572.875L848.834 535.593C849.769 533.946 849.547 531.831 848.143 530.429C846.45 528.737 843.71 528.737 842.04 530.429C840.347 532.121 840.347 534.858 842.04 536.528C843.443 537.93 845.559 538.152 847.208 537.218L888.44 578.417V391.048H888.462Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M914.702 617.565L850.66 553.573L815.397 588.807V778.781L890.822 854.147C889.887 855.794 890.11 857.908 891.513 859.311C893.206 861.002 895.946 861.002 897.616 859.311C899.309 857.619 899.309 854.881 897.616 853.212C896.213 851.81 894.097 851.587 892.448 852.522L817.692 777.846V589.764L850.66 556.822L916.996 623.107V551.681L884.14 518.85C885.075 517.203 884.853 515.088 883.449 513.686C881.756 511.995 879.016 511.995 877.346 513.686C875.653 515.378 875.653 518.116 877.346 519.785C878.749 521.187 880.865 521.41 882.514 520.475L914.702 552.638V617.565Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M873.303 1152.85C873.303 1155.23 875.241 1157.16 877.625 1157.16C880.008 1157.16 881.946 1155.23 881.946 1152.85C881.946 1150.87 880.588 1149.2 878.783 1148.71V1003.12L839.266 963.63V800.144L887.382 848.221C886.446 849.868 886.669 851.983 888.072 853.385C889.765 855.077 892.505 855.077 894.176 853.385C895.869 851.694 895.869 848.956 894.176 847.286C892.772 845.884 890.656 845.662 889.008 846.596L836.95 794.579V964.564L876.467 1004.05V1148.68C874.662 1149.2 873.303 1150.87 873.303 1152.85Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M764.444 403.674C764.444 401.693 763.085 400.046 761.281 399.534V216.483L697.105 152.357V46.653L740.542 3.24967L791.843 54.5102C790.907 56.1573 791.13 58.2718 792.533 59.6741C794.226 61.3657 796.966 61.3657 798.637 59.6741C800.329 57.9824 800.329 55.2447 798.637 53.5754C797.233 52.1731 795.117 51.9504 793.469 52.8853L740.542 0L694.81 45.696V153.314L758.986 217.44V399.556C757.16 400.068 755.823 401.715 755.823 403.696C755.823 406.077 757.761 408.014 760.144 408.014C762.528 407.992 764.444 406.077 764.444 403.674Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M725.471 346.332C725.471 348.313 726.83 349.983 728.634 350.472V484.244L763.762 519.345V603.57C761.936 604.082 760.599 605.729 760.599 607.71C760.599 610.091 762.537 612.028 764.921 612.028C767.304 612.028 769.242 610.091 769.242 607.71C769.242 605.729 767.906 604.082 766.079 603.57V518.388L730.951 483.287V350.472C732.777 349.961 734.114 348.313 734.114 346.332C734.114 343.951 732.176 342.014 729.792 342.014C727.387 341.992 725.471 343.929 725.471 346.332Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M756.581 553.395C758.274 551.703 758.274 548.965 756.581 547.296C754.888 545.604 752.148 545.604 750.477 547.296C749.074 548.698 748.851 550.813 749.787 552.46L705.436 596.776V809.697L783.801 888.001V1049.17C781.975 1049.68 780.638 1051.33 780.638 1053.31C780.638 1055.69 782.576 1057.63 784.96 1057.63C787.343 1057.63 789.281 1055.69 789.281 1053.31C789.281 1051.33 787.922 1049.66 786.118 1049.17V887.044L707.753 808.74V597.711L751.413 554.085C753.061 555.02 755.177 554.797 756.581 553.395Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M635.623 279.562V417.563L689.329 471.227V557.143C687.502 557.655 686.166 559.302 686.166 561.283C686.166 563.665 688.104 565.602 690.487 565.602C692.871 565.602 694.809 563.665 694.809 561.283C694.809 559.302 693.472 557.655 691.645 557.143V470.292L637.939 416.628V280.542L681.844 236.671V42.6466L645.602 6.43262C646.538 4.78552 646.315 2.67098 644.911 1.26871C643.218 -0.422905 640.479 -0.422905 638.808 1.26871C637.115 2.96033 637.115 5.69806 638.808 7.36742C640.211 8.76968 642.327 8.99233 643.976 8.05749L679.528 43.5815V235.714L635.623 279.562Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M570.224 429.248L534.182 465.262V740.684L498.586 776.275L553.116 830.763V1024.34C551.29 1024.85 549.953 1026.5 549.953 1028.48C549.953 1030.86 551.891 1032.8 554.275 1032.8C556.658 1032.8 558.596 1030.86 558.596 1028.48C558.596 1026.5 557.26 1024.83 555.433 1024.34V829.806L501.86 776.275L536.521 741.641V466.197L572.563 430.183V262.757L635.625 199.745V45.785L596.197 6.4326C597.133 4.7855 596.91 2.67098 595.507 1.26871C593.814 -0.422905 591.074 -0.422905 589.403 1.26871C587.71 2.96033 587.71 5.69809 589.403 7.36746C590.807 8.76972 592.923 8.99229 594.571 8.05745L633.286 46.7421V198.81L570.224 261.822V429.248Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M489.52 545.169C489.52 543.188 488.183 541.518 486.356 541.029V424.797L451.228 389.695V175.973L466.086 161.127V8.45813C467.912 7.9462 469.249 6.29906 469.249 4.31808C469.249 1.93646 467.311 0 464.927 0C462.544 0 460.606 1.93646 460.606 4.31808C460.606 6.29906 461.965 7.96845 463.769 8.45813V160.192L448.911 175.038V390.675L484.04 425.776V541.051C482.213 541.563 480.877 543.21 480.877 545.191C480.877 547.573 482.815 549.509 485.198 549.509C487.582 549.509 489.52 547.55 489.52 545.169Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M447.931 677.266L495.423 629.812V491.967C497.249 491.455 498.586 489.808 498.586 487.827C498.586 485.445 496.648 483.509 494.265 483.509C491.881 483.509 489.943 485.445 489.943 487.827C489.943 489.808 491.302 491.477 493.106 491.967V628.832L446.283 675.619C444.635 674.684 442.518 674.906 441.115 676.309C439.422 678 439.422 680.738 441.115 682.407C442.808 684.099 445.548 684.099 447.219 682.407C448.644 681.027 448.867 678.913 447.931 677.266Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M450.202 877.45C450.202 879.832 452.14 881.769 454.524 881.769C456.907 881.769 458.845 879.832 458.845 877.45C458.845 875.469 457.509 873.8 455.682 873.31V651.82L481.789 625.733C483.437 626.668 485.553 626.445 486.957 625.043C488.65 623.352 488.65 620.614 486.957 618.944C485.264 617.253 482.524 617.253 480.853 618.944C479.45 620.347 479.227 622.461 480.163 624.108L453.388 650.863V873.31C451.539 873.822 450.202 875.469 450.202 877.45Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M377.159 499.74C377.159 502.121 379.097 504.058 381.481 504.058C383.864 504.058 385.802 502.121 385.802 499.74C385.802 497.759 384.443 496.089 382.639 495.6V267.365L431.734 218.308V110.245L392.997 71.5377V8.4581C394.824 7.94616 396.16 6.29906 396.16 4.31808C396.16 1.93646 394.222 0 391.839 0C389.455 0 387.517 1.93646 387.517 4.31808C387.517 6.29906 388.876 7.96842 390.681 8.4581V72.4725L429.418 111.179V217.351L380.322 266.408V495.6C378.518 496.112 377.159 497.759 377.159 499.74Z"
        fill="none"
      />
      <motion.path
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: Math.random(),
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random(),
        }}
        d="M439.844 806.385C439.844 804.404 438.507 802.735 436.681 802.245V616.701L374.532 554.579V446.516C376.359 446.004 377.695 444.357 377.695 442.376C377.695 439.994 375.757 438.058 373.374 438.058C370.99 438.058 369.052 439.994 369.052 442.376C369.052 444.357 370.411 446.026 372.215 446.516V555.536L434.364 617.659V802.245C432.537 802.757 431.201 804.404 431.201 806.385C431.201 808.767 433.139 810.703 435.522 810.703C437.906 810.703 439.844 808.789 439.844 806.385Z"
        fill="none"
      />
      <defs>
        <linearGradient
          id="paint0_linear_762_1694"
          x1="1521.4"
          y1="0"
          x2="1521.4"
          y2="211.894"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_762_1694"
          x1="1521.4"
          y1="145.886"
          x2="1521.4"
          y2="460.926"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_762_1694"
          x1="1521.41"
          y1="394.905"
          x2="1521.41"
          y2="886.368"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_762_1694"
          x1="1463.19"
          y1="-0.00645486"
          x2="1463.19"
          y2="453.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_762_1694"
          x1="1400.07"
          y1="-0.0175839"
          x2="1400.07"
          y2="895.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_762_1694"
          x1="1305.25"
          y1="-0.0144678"
          x2="1305.25"
          y2="1019.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_762_1694"
          x1="1177.72"
          y1="-0.0109065"
          x2="1177.72"
          y2="516.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_762_1694"
          x1="1177.74"
          y1="450.491"
          x2="1177.74"
          y2="1066.16"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_762_1694"
          x1="1177.75"
          y1="1000.16"
          x2="1177.75"
          y2="1144.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_762_1694"
          x1="1062.34"
          y1="-0.00289356"
          x2="1062.34"
          y2="332.141"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_762_1694"
          x1="1062.34"
          y1="266.121"
          x2="1062.34"
          y2="647.713"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_762_1694"
          x1="1062.35"
          y1="581.694"
          x2="1062.35"
          y2="982.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_762_1694"
          x1="973.307"
          y1="-0.0193646"
          x2="973.307"
          y2="468.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_762_1694"
          x1="973.291"
          y1="402.474"
          x2="973.291"
          y2="796.639"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_762_1694"
          x1="973.302"
          y1="730.639"
          x2="973.302"
          y2="864.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_762_1694"
          x1="866.206"
          y1="-0.00556453"
          x2="866.206"
          y2="448.617"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_762_1694"
          x1="866.198"
          y1="382.583"
          x2="866.198"
          y2="578.43"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_762_1694"
          x1="866.187"
          y1="512.405"
          x2="866.187"
          y2="860.578"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_762_1694"
          x1="866.199"
          y1="794.576"
          x2="866.199"
          y2="1157.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_762_1694"
          x1="747.351"
          y1="-0.0231485"
          x2="747.351"
          y2="408.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_762_1694"
          x1="747.351"
          y1="342.002"
          x2="747.351"
          y2="612.034"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_762_1694"
          x1="747.364"
          y1="546.022"
          x2="747.364"
          y2="1057.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_762_1694"
          x1="665.211"
          y1="-0.0349453"
          x2="665.211"
          y2="565.601"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_762_1694"
          x1="567.088"
          y1="0.00155807"
          x2="567.088"
          y2="1032.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_762_1694"
          x1="469.222"
          y1="-0.0300485"
          x2="469.222"
          y2="549.485"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_762_1694"
          x1="469.236"
          y1="483.51"
          x2="469.236"
          y2="683.699"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_762_1694"
          x1="469.208"
          y1="617.684"
          x2="469.208"
          y2="881.779"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_762_1694"
          x1="404.449"
          y1="-0.00378388"
          x2="404.449"
          y2="504.062"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_762_1694"
          x1="404.433"
          y1="438.069"
          x2="404.433"
          y2="810.715"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.1072" stop-color="#141414" />
          <stop offset="0.326" stop-color="#464646" />
          <stop offset="0.6375" stop-color="#989898" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default LandingLines;
