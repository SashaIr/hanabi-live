import svgPathToCommands from './svgPathToCommands';
import drawSvgPath from './drawSvgPath';

const textShapes = [
    'flower',
    'number_sign',
    'tensor_symbol',
    'infinity',
    'null_symbol',
];

const shapeFunctions = {
    red: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 9.5,12\
        c -4.977882,0.4564 -4.575773,-2.55877 -3.712077,-4.42968\
        c 4.977884,-0.45641 4.576419,2.55877 3.712077,4.42968\
        m -2.613065,-7.8864 \
        c -0.479686,0 -0.851411,0.95096 -1.098367,1.85992\
        c -6.351649,1.72868 -4.838243,9.48513 2.613067,9.48384\
        c 0.479687,0 0.850765,-0.95098 1.098365,-1.86056\
        c 6.351007,-1.7274 4.836947,-9.48449 -2.613065,-9.4832 z"));
        ctx.scale(0.1,0.1);
    },

    yellow: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 5.5,11\
        c 1.12377,-0.61595 2.487481,-1.53866 3.502518,-2.61018\
        c -0.01157,1.31207 0.13,2.94853 0.578893,4.32924\
        c -1.123162,-0.67487 -2.632053,-1.3965 -4.081411,-1.71906\
        m 8.341413,1.89887\
        c -0.97191,-0.88809 -3.083991,-3.54565 -3.924694,-5.69174\
        c 0.03765,-0.0637 0.08019,-0.12765 0.114811,-0.19256\
        c 0,0 0.492638,-0.5704 -0.441611,-1.737294\
        c -0.933033,-1.166897 -1.71056,-1.27078 -1.918307,-1.244644\
        c -0.207745,0.02608 -0.414884,0.06502 -0.492028,0.414869\
        c -0.291573,1.319985 -1.596363,4.611109 -3.082776,6.383029\
        c -0.05528,0 -0.111762,-0.004 -0.165834,-0.002\
        c 0,0 -0.740474,-0.14215 -1.283528,1.25012\
        c -0.544269,1.39165 -0.244798,2.11755 -0.119054,2.28399\
        c 0.125739,0.16695 0.26363,0.3274 0.605013,0.21928\
        c 1.283527,-0.40639 4.764179,-0.91906 7.042699,-0.52665\
        c 0.0061,0.009 0.01084,0.0206 0.01708,0.0297\
        c 0,0 0.246622,0.71254 1.724532,0.48779\
        c 1.477304,-0.22536 1.95536,-0.84739 2.037366,-1.03934\
        c 0.08079,-0.19256 0.151857,-0.39302 -0.113599,-0.63417 z"));
        ctx.scale(0.1,0.1);
    },

    green: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 12.8,11.2 \
        c -0.399335,-0.319468 -1.100314,-1.046191 -2.106901,-1.547834 \
        c 1.006587,-0.502303 1.707566,-1.228366 2.106901,-1.547833\
        c 0.820452,-0.656758 0.409895,-0.984806 0.409895,-0.984806\
        c -0.737943,-1.434963 -1.574235,-2.271255 -2.419768,-3.035602\
        c -0.584811,-0.528045 -0.70362,0.07656 -0.80923,0.547188\
        c -0.156428,0.696359 -0.412536,1.368957 -0.751806,1.996672\
        c -0.475899,0.881836 -1.079193,1.538592 -1.75113,2.184788\
        c -0.672598,-0.646196 -1.275889,-1.302952 -1.751791,-2.184788\
        c -0.338609,-0.627715 -0.595371,-1.300313 -0.751145,-1.996672\
        c -0.106274,-0.470621 -0.22508,-1.075233 -0.80989,-0.547188\
        c -0.845533,0.764347 -1.681825,1.600639 -2.419769,3.035602\
        c 0,0 -0.410554,0.328048 0.409896,0.984806\
        c 0.399995,0.319467 1.100975,1.04553 2.106901,1.547833\
        c -1.005926,0.501643 -1.706906,1.228366 -2.106901,1.547834\
        c -0.82045,0.656097 -0.409896,0.984144 -0.409896,0.984144\
        c 0.737944,1.435624 1.574236,2.271917 2.419769,3.036262\
        c 0.58481,0.528045 0.703622,-0.07656 0.80989,-0.547186\
        c 0.15577,-0.696362 0.412536,-1.36896 0.751145,-1.997334\
        c 0.475902,-0.881175 1.079193,-1.538593 1.751791,-2.184128\
        c 0.671937,0.645535 1.275231,1.302953 1.75113,2.184128\
        c 0.33927,0.628374 0.595372,1.300972 0.751806,1.997334\
        c 0.105616,0.470618 0.224419,1.075231 0.80923,0.547186\
        c 0.845533,-0.764345 1.681825,-1.600638 2.419768,-3.036262\
        c 0,0 0.410557,-0.328047 -0.409895,-0.984144 z"));
        ctx.scale(0.1,0.1);
    },

    blue: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 12,6 c 0.0592,-0.0519 0.12349,-0.0967 0.18024,-0.15026 c 0.0549,-0.0524 0.50069,-0.41902 0.71707,-0.6859 c 0.13782,-0.16892 0.0001,-0.28746 -0.12028,-0.27624 c -9.01455,0.82058 -10.779182,-0.3523 -10.779182,-0.3523 c -0.846148,2.56152 1.064392,4.01249 1.064392,4.01249 c 0.004,0.002 0.0273,0.006 0.0392,0.008 c -0.57053,2.80096 -0.21823,5.54579 -0.13895,5.62871 c 0,0 1.64989,1.74031 4.1054,0.61981 c 0,0 -0.90164,-1.07873 -1.32628,-6.37384 c 1.22839,-0.15969 2.70681,-0.48201 4.0736,-1.07999 c -0.98519,3.16074 -0.53936,6.73924 -0.44832,6.83402 c 0,0 1.65052,1.74031 4.10416,0.61981 c 0,0 -1.1654,-1.39924 -1.47094,-8.8038"));
        ctx.scale(0.1,0.1);
    },

    purple: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 5.01, 16 \
        c -0.353554,-0.31585 -0.482283,-0.8303 -0.563443,-2.25184 c -0.03994,-0.69964 -0.118403,-1.40948 -0.174349,-1.57745 \
        c -0.07979,-0.23954 -0.344461,-0.52962 -1.22743,-1.34523 c -1.252104,-1.15659 -1.495919,-1.49841 -1.327659,-1.8613 \
        c 0.168207,-0.36278 0.889096,-0.62389 2.504647,-0.9072 c 2.042127,-0.3581 1.987845,-0.32728 3.016359,-1.71273 \
        c 0.757076,-1.01981 1.2116,-1.49324 1.698385,-1.76903 c 0.47571,-0.26951 0.865274,-0.27142 1.149126,-0.005 \
        c 0.402619,0.37704 0.531282,0.89085 0.615204,2.45684 c 0.04838,0.90279 0.09704,1.24348 0.204837,1.43404 \
        c 0.07776,0.13746 0.636057,0.68553 1.240653,1.21792 c 1.475849,1.29959 1.644939,1.65672 0.975274,2.05989 \
        c -0.338793,0.20396 -0.749878,0.31405 -2.217997,0.594 c -0.63594,0.12127 -1.284096,0.2682 -1.440345,0.32652 \
        c -0.449584,0.16782 -0.881147,0.56477 -1.626244,1.4958 c -0.737425,0.92144 -1.604466,1.78279 -1.961075,1.94817 \
        c -0.336328,0.15601 -0.613041,0.12315 -0.865943,-0.10277\
        m 1.79, -3.80 \
        c -0.119784,-0.10701 -0.163398,-0.2813 -0.190895,-0.76293 c -0.01353,-0.23703 -0.04011,-0.47753 -0.05907,-0.53444 \
        c -0.02703,-0.0811 -0.116704,-0.17944 -0.415855,-0.45577 c -0.424214,-0.39185 -0.506819,-0.50766 -0.449812,-0.63061 \
        c 0.05699,-0.12291 0.301226,-0.21137 0.848577,-0.30735 c 0.691874,-0.12133 0.673483,-0.11088 1.021946,-0.58028 \
        c 0.256497,-0.34551 0.41049,-0.50591 0.575414,-0.59935 c 0.16117,-0.0913 0.293156,-0.0919 0.389325,-0.002 \
        c 0.136407,0.12773 0.179998,0.30181 0.208431,0.83238 c 0.0164,0.30586 0.03288,0.42129 0.0694,0.48585 \
        c 0.02634,0.0466 0.215497,0.23226 0.420334,0.41263 c 0.50002,0.4403 0.557307,0.5613 0.330424,0.6979 \
        c -0.114783,0.0691 -0.254059,0.10639 -0.751459,0.20124 c -0.215457,0.0411 -0.435053,0.0909 -0.487991,0.11062 \
        c -0.152319,0.0568 -0.298533,0.19135 -0.550973,0.50678 c -0.24984,0.31219 -0.543593,0.60401 -0.664413,0.66005 \
        c -0.113948,0.0529 -0.2077,0.0418 -0.293383,-0.0348 z"));
        ctx.scale(0.1,0.1);
      },

    white: (ctx) => {
        ctx.scale(2.5,2.5);
        drawSvgPath(ctx, svgPathToCommands("m 22,45 \
        c 2.12997,-3.97531 2.97674,-9.00848 3.11431,-14.87657 \
        c 3.92787,2.36004 8.96579,3.34913 14.90029,3.55548 \
        c -2.34581,3.92313 -3.32541,8.95393 -3.52939,14.87657 \
        c -3.83537,-2.3126 -8.72623,-3.31592 -14.48521,-3.55548 \
        m 27.05866,1.06736 \
        c -0.50758,-4.71297 -0.71394,-9.41171 -0.31072,-14.13654 \
        c 0.58824,-0.71869 1.18833,-1.71726 1.73624,-3.12379 \
        c 2.12522,-5.43403 0.95587,-8.26608 0.46489,-8.91599 \
        c -0.49099,-0.65227 -1.02941,-1.27845 -2.36479,-0.85625\
        c -3.54836,1.12428 -7.35052,1.67456 -11.04358,2.07067 \
        c -4.73431,0.50759 -9.45914,0.71631 -14.21243,0.3036 \
        c -0.41271,-0.0357 -0.84914,-0.0901 -1.28557,-0.14952 \
        c -0.51708,-0.29175 -1.1148,-0.57875 -1.81925,-0.85389 \
        c -5.43403,-2.12285 -8.26608,-0.9535 -8.91598,-0.46252 \
        c -0.65228,0.49099 -1.27846,1.02941 -0.85626,2.36242 \
        c 1.12428,3.54836 1.67456,7.35289 2.07067,11.0412 \
        c 0.47675,4.44732 0.66888,8.88515 0.35341,13.33958 \
        c -0.60246,0.72106 -1.21678,1.73149 -1.77892,3.17123\
        c -2.12523,5.43403 -0.95588,8.26846 -0.46253,8.91836\
        c 0.49099,0.65227 1.02704,1.27845 2.36242,0.85388\
        c 3.54837,-1.12191 7.35052,-1.67456 11.0412,-2.07067\
        c 4.72483,-0.50521 9.4378,-0.71157 14.17449,-0.3036\
        c 0.72106,0.59297 1.72438,1.19781 3.14277,1.75283\
        c 5.43403,2.12286 8.26846,0.95351 8.91598,0.46252\
        c 0.65465,-0.49098 1.27846,-1.0294 0.85863,-2.36241\
        c -1.12665,-3.54837 -1.67693,-7.3529 -2.07067,-11.04121 z"));
        ctx.scale(0.4,0.4);
    },

    black: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 8.16, 16.01 \
        c -0.0725,-0.20206 -0.24858,-0.88705 -0.39105,-1.52223 c -0.41656,-1.85717 -0.6246,-2.37888 -0.9486,-2.37888 \
        c -0.24371,0 -1.19677,0.8456 -1.85395,1.64491 c -0.96329,1.1716 -0.9883,1.19104 -1.51637,1.1786 \
        c -0.49446,-0.0116 -1.03899,-0.19565 -1.21152,-0.40936 c -0.16173,-0.20036 0.0555,-0.54882 0.96942,-1.5544\
        c 1.35605,-1.49217 1.42292,-1.87389 0.51479,-2.93782 c -0.48841,-0.57217 -0.72397,-0.96231 -0.72397,-1.19898\
        c 0,-0.23539 0.85367,-1.32559 0.9617,-1.22816 c 0.0377,0.034 0.28754,0.28313 0.55522,0.55366\
        c 1.01612,1.02687 1.65995,1.29579 2.15721,0.901 c 0.22007,-0.17471 0.22658,-0.20312 0.1723,-0.75223\
        c -0.0311,-0.31386 -0.13548,-0.93277 -0.23212,-1.37536 c -0.37437,-1.71453 -0.10567,-2.37916 0.96179,-2.37916\
        c 0.31109,0 0.3859,0.0309 0.52942,0.21818 c 0.2072,0.27052 0.21951,0.32418 0.48622,2.12084 \
        c 0.1789,1.20513 0.24745,1.48821 0.38734,1.59925 c 0.36468,0.28953 0.98972,-0.12944 2.18359,-1.46376\
        c 1.14173,-1.27599 1.48629,-1.48327 2.07403,-1.24766 c 0.38977,0.15627 0.7809,0.4512 0.77992,0.58811\
        c -0.00035,0.06 -0.39296,0.5716 -0.87226,1.13658 c -0.95993,1.13148 -1.19361,1.56276 -1.1875,2.19163\
        c 0.004,0.4546 0.12413,0.68838 0.73975,1.44458 c 0.42998,0.52813 0.45786,0.84221 0.12228,1.37688\
        c -0.26203,0.41747 -0.4774,0.54418 -0.73728,0.43376 c -0.0951,-0.0405 -0.45089,-0.33762 -0.79048,-0.66041 \
        c -0.74298,-0.70622 -1.00772,-0.88043 -1.33796,-0.88043 c -0.45309,0 -0.5653,0.24993 -0.54857,1.22188 \
        c 0.008,0.46331 0.0795,1.11003 0.15863,1.43716 c 0.25229,1.0409 0.27282,1.44969 0.0815,1.62141 \
        c -0.17848,0.16016 -1.15992,0.68778 -1.27938,0.68778 c -0.0396,0 -0.13139,-0.16532 -0.20404,-0.36737 z"));
        ctx.scale(0.1,0.1);
    },

    rainbow_red: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 3.80459,9.10092 c 0.78004,0.0657 1.54002,0.26875 2.16449,0.57838 c 0.2066,0.10253 0.47599,0.26052 0.55174,0.32376\
        l 0.0499,0.0416 l -0.0245,0.24955 \
        c -0.0131,0.13724 -0.0276,0.25285 -0.0313,0.25692 c -0.004,0.004 -0.0995,0.0131 -0.21263,0.0187 c -0.29869,0.0149 -0.473,0.0682 -0.89263,0.26946\
        c -0.76509,0.36706 -1.66911,1.04027 -2.28476,1.70141 c -0.27924,0.29987 -0.43279,0.51222 -0.61466,0.85004 c -0.19235,0.35723 -0.26662,0.4197 -0.36886,0.31025\
        c -0.15368,-0.1645 -0.3442,-0.8427 -0.50566,-1.79974 c -0.12064,-0.71546 -0.138,-0.90602 -0.13875,-1.52842 c -0.00048,-0.51209 0.0001,-0.55429 0.0338,-0.68222\
        c 0.0414,-0.16452 0.0949,-0.27449 0.15966,-0.32902 c 0.0829,-0.0698 0.49398,-0.17198 0.92188,-0.2291 c 0.27213,-0.0364 0.92641,-0.0534 1.1925,-0.031 z"));
        ctx.scale(0.1,0.1);
    },
    rainbow_yellow: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 6.92371,11.0108 l 0.22018,0.10252 l -0.0364,0.11466\
        c -0.0542,0.17067 -0.0684,0.28554 -0.0685,0.5564 c -0.00025,0.49549 0.11707,1.09776 0.35021,1.79862 c 0.13968,0.41996 0.22238,0.62377 0.405,0.99875\
        c 0.26815,0.55064 0.41218,0.78038 0.68716,1.0962 c 0.0773,0.0887 0.1843,0.21158 0.23767,0.27294 c 0.14117,0.1619 0.15686,0.21493 0.0792,0.26585 \
        c -0.14117,0.0925 -0.971,0.0645 -1.83727,-0.0621 c -1.26757,-0.18525 -2.28442,-0.53065 -2.42319,-0.82306 c -0.0451,-0.0951 -0.0239,-0.44732 0.0534,-0.88323\
        c 0.1973,-1.11437 0.79794,-2.28995 1.56532,-3.06367 c 0.16059,-0.1619 0.51581,-0.47683 0.53758,-0.47655 c 0.005,0.00007 0.10868,0.0463 0.22976,0.10274 z"));
        ctx.scale(0.1,0.1);
    },
    rainbow_green: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 13.25557,10.6205 c 0.0864,0.13203 -0.0583,0.60821 -0.43679,1.43607 c -0.60542,1.32434 -1.3077,2.32172 -1.70833,2.42617\
        c -0.0661,0.0168 -0.0805,0.0149 -0.24955,-0.0474 c -1.12023,-0.41053 -2.24418,-1.35941 -2.90555,-2.45297 c -0.16844,-0.2786 -0.35111,-0.67143 -0.42237,-0.90862\
        c -0.007,-0.0248 0.0295,-0.0726 0.17478,-0.22555 l 0.18412,-0.19407 l 0.0926,0.0719 c 0.28535,0.22176 0.80302,0.36291 1.59759,0.43562\
        c 0.27091,0.0248 1.09809,0.0247 1.38026,-0.00021 c 0.82402,-0.0726 1.34016,-0.19851 1.84534,-0.4501 c 0.19629,-0.0978 0.25518,-0.12025 0.32991,-0.12566\
        c 0.0846,-0.005 0.0928,-0.004 0.11801,0.0348 z"));
        ctx.scale(0.1,0.1);
    },
    rainbow_blue: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 9.44644,4.7507 c 0.27158,0.11017 0.88864,0.62637 1.5397,1.28791 c 0.8554,0.86917 1.3096,1.52296 1.3096,1.88507 \
        c 0,0.0785 -0.005,0.0899 -0.107,0.22061 c -0.51089,0.65834 -1.32363,1.27224 -2.20494,1.66548 c -0.64887,0.28953 -1.20308,0.43657 -1.79625,0.47654 \
        c -0.12791,0.009 -0.23401,0.0131 -0.23567,0.0112 c -0.0224,-0.029 -0.2568,-0.44683 -0.2565,-0.45734 c 0.00021,-0.007 0.0366,-0.039 0.0808,-0.0691 \
        c 0.19676,-0.13334 0.3518,-0.31607 0.5442,-0.64121 c 0.40456,-0.68368 0.78938,-1.81061 0.91805,-2.68859 c 0.0732,-0.49963 0.0766,-0.79702 0.0149,-1.35686\
        c -0.0187,-0.16974 -0.0112,-0.30902 0.0168,-0.34419 c 0.025,-0.0301 0.0853,-0.0267 0.17553,0.009 z"));
        ctx.scale(0.1,0.1);
    },
    rainbow_white: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 6.42895,4.77182 c 0.0907,0.0299 0.10942,0.0491 0.23446,0.24133 c 0.45749,0.70346 0.75185,1.55329 0.87029,2.51273 \
        c 0.0387,0.31381 0.0388,1.04476 0.00028,1.33132 c -0.0325,0.24163 -0.0878,0.50776 -0.14229,0.68661 l -0.0402,0.13184 l -0.074,0.0149 \
        c -0.21715,0.0463 -0.42897,0.0822 -0.4461,0.0757 c -0.0112,-0.004 -0.0282,-0.045 -0.0387,-0.0909 c -0.0937,-0.40664 -0.63868,-1.01795 -1.46071,-1.63848\
        c -0.84861,-0.64061 -1.83278,-1.12201 -2.433,-1.19007 c -0.22451,-0.0254 -0.39502,-0.0848 -0.4297,-0.14957 c -0.0558,-0.10439 0.11596,-0.28062 0.55446,-0.56843\
        c 0.88649,-0.58188 2.05919,-1.13593 2.79172,-1.31902 c 0.22709,-0.0568 0.50476,-0.0741 0.61342,-0.0385 z"));
        ctx.scale(0.1,0.1);
    },
    rainbow_center: (ctx) => {
        ctx.scale(10,10);
        drawSvgPath(ctx, svgPathToCommands("m 7.02538,10.81167 l -0.2522,-0.11438 l -0.0242,-0.0447 l -0.0242,-0.0447 l 0.0231,-0.24606\
        c 0.0305,-0.3246 0.0278,-0.3096 0.0623,-0.3492 l 0.0294,-0.0338 l 0.27507,-0.0539 l 0.27508,-0.0539 l 0.0349,0.0169\
        c 0.0192,0.009 0.0401,0.0195 0.0464,0.0227 c 0.006,0.003 0.0769,0.11697 0.15689,0.25282 l 0.14537,0.247 l -0.005,0.0444\
        c -0.005,0.0439 -0.007,0.0466 -0.19794,0.2482 c -0.16903,0.17874 -0.19674,0.20453 -0.22535,0.20972 c -0.0179,0.003 -0.0404,0.008 -0.0499,0.01\
        c -0.0101,0.002 -0.12326,-0.0443 -0.26954,-0.11067 z"));
        ctx.scale(0.1,0.1);
    },

    number1: (ctx) => {
        ctx.scale(6,6);
        drawSvgPath(ctx, svgPathToCommands("m 11,14 c -0.381075,-0.2965 -2.101041,-0.55763 -0.94508,-7.44952 c 0.679354,-0.37648 0.422827,-0.80744 0.399121,-0.9288\
        c -0.01132,-0.0577 -0.0789,-0.16525 -0.1755,-0.29793 c 0.02795,-0.14294 0.05414,-0.28271 0.08421,-0.43061 c 0,0 0.154978,-0.85415 -0.27351,-0.3188\
        c -0.0651,0.0813 -0.132686,0.16701 -0.201329,0.25511 c -0.241312,-0.29368 -0.487224,-0.58205 -0.57285,-0.71049 c -0.181515,-0.2728 -0.314201,0 -0.314201,0\
        c -0.177622,0.59231 -1.650261,1.58127 -3.692565,2.73227 c -0.476963,0.26927 0,0.3188 0,0.3188 c 1.361182,0 2.36995,-0.0669 3.119715,-0.17266\
        c -1.130132,2.00727 -2.03169,4.72044 -1.2982,7.95904 c 0,0 0.227512,0.86511 0.865466,0.86511 c 0.393459,0 0.734904,-0.1939 1.062197,-0.39169\
        c 0.569311,-0.34286 1.12624,-0.68536 1.743318,-0.93801 c 0.228221,-0.0931 0.488993,-0.26643 0.199207,-0.49182 z"));
        ctx.scale(1/6,1/6);
    },

    number2: (ctx) => {
        ctx.scale(6,6);
        drawSvgPath(ctx, svgPathToCommands("m 12,13 c -1.631607,-0.636759 -3.231586,-0.479326 -4.602446,-0.03338 c 3.149708,-3.6083 4.321667,-7.218709 2.703414,-8.197392\
        c -1.945418,-1.175825 -4.390544,0.537309 -6.150416,3.120188 c -0.586155,0.860609 0,0.588264 0,0.588264 c 6.243892,-3.993447 3.337714,2.240956 1.737383,5.230771\
        c -0.91578,0.494437 -1.618956,1.028583 -1.998481,1.32658 c -0.503574,0.396042 0.261098,0.180626 0.261098,0.180626\
        c 0.383391,-0.150405 0.748157,-0.263559 1.102029,-0.358792 c -0.0731,0.128266 -0.126157,0.221038 -0.152864,0.268479\
        c -0.406935,0.723558 0.362306,0 0.362306,0 c 0.15673,-0.140213 0.309945,-0.28113 0.461052,-0.422749 c 2.867172,-0.54258 4.609825,0.626568 4.920122,1.191287\
        c 0.183086,0.333842 0.542932,0 0.542932,0 c 0,0 0.677874,-1.35645 0.949867,-2.090199 c 0.270939,-0.733749 -0.135996,-0.803679 -0.135996,-0.803679"));
        ctx.scale(1/6,1/6);
    },

    number3: (ctx) => {
        ctx.scale(6,6);
        drawSvgPath(ctx, svgPathToCommands("m 11,10 c -0.373211,-0.1743 -0.787188,-0.22526 -1.215573,-0.20207 c 1.079572,-0.95482 1.619357,-1.90435 1.447512,-3.10798\
        c -0.188012,-1.31502 -1.160399,-1.62884 -2.346803,-1.61831 c 0.156735,-0.0488 0.312415,-0.0991 0.457904,-0.17148 c 0.30609,-0.15182 0.562277,-0.43683 0.03584,-0.3943\
        c -1.695968,0.1374 -3.696267,0.52362 -4.972986,1.73919 c -0.664892,0.63361 -0.295546,1.43451 0.261107,1.99503 c 0.277273,0.27973 0.551735,0.71022 0.928459,0.85958\
        c 0.73588,0.29168 0.493398,-0.46494 0.58266,-0.99594 c 0.102615,-0.60831 0.458255,-1.26056 0.91616,-1.80666 c 0.99804,0.61428 2.192878,1.82916 1.129824,3.83367\
        c -0.486721,0.16025 -0.952707,0.34756 -1.35825,0.49691 c -1.011044,0.37216 0,0.43015 0,0.43015 c 0.22948,0.0246 0.437522,0.0601 0.631858,0.10155\
        c -0.20031,0.26428 -0.333148,0.50254 0.09454,0.22913 c 0.07802,-0.0499 0.151815,-0.0987 0.228074,-0.1483 c 2.662732,0.77384 1.570157,3.27807 0.985741,4.04347\
        c -1.514632,-0.27375 -3.570105,-1.07887 -3.894117,-3.16737 c 0,0 0.013,-0.693 -0.397459,0 c -0.604096,1.02159 -1.257392,2.01892 -1.257392,2.58155\
        c 0,0.56227 0.66173,1.55505 2.15106,1.58843 c 1.488627,0.0327 3.90466,0.18309 4.963849,-0.45439 c 0,0 0.661729,-0.53872 0,-0.43928\
        c -0.13319,0.02 -0.416437,0.0246 -0.784728,-0.006 c 0.773131,-0.55424 1.556804,-1.22686 2.076558,-1.95642 c 0.746774,-1.04829 0.618153,-2.83246 -0.663837,-3.43058 z"));
        ctx.scale(1/6,1/6);
    },

    number4: (ctx) => {
        ctx.scale(6,6);
        drawSvgPath(ctx, svgPathToCommands("m 11,11 c 0.22028,0.10095 0.344816,0.18524 0.403095,0.22618 c 0.267805,0.18732 0.374303,0 0.374303,0\
        c 0.237278,-0.486 0.64974,-1.33556 0.410033,-1.87013 c -0.193222,-0.43154 -0.727791,-0.55018 -1.189513,-0.61852 c 0.06973,-1.04832 0.234156,-2.28502 0.53908,-3.74545\
        c 0,0 0.07909,-0.79405 -0.294516,-0.26712 c -0.392689,0.55365 -1.371981,1.83856 -2.019639,3.84294 c -0.247339,-0.006 -0.493636,-0.005 -0.736118,0.01\
        c -0.928646,0.0562 -1.778199,0.0531 -2.669726,0.37465 c -0.17102,0.0614 -0.336838,0.13286 -0.503001,0.20536 c 0.822147,-2.19655 1.553407,-2.93163 2.043228,-3.46759\
        c 0.234156,-0.25635 -0.09089,-0.47351 -0.09089,-0.47351 c 0,0 -0.649045,-0.59355 -1.413262,-0.91651 c -0.764215,-0.32296 -0.887017,0.38055 -0.887017,0.38055\
        c -0.286538,0.83775 -0.463802,3.36075 -0.505431,4.89473 c -0.357998,0.19322 -0.709058,0.39858 -1.056997,0.60741 c -0.595277,0.35696 0.160267,0.32124 0.160267,0.32124\
        c 0.308739,-0.0298 0.603602,-0.0534 0.889446,-0.0746 c 0.0018,0.0746 0.0041,0.14049 0.0073,0.19461 c 0.0569,0.89569 0.320187,0.13529 0.320187,0.13529\
        c 0.03746,-0.12523 0.07424,-0.24039 0.111354,-0.35903 c 1.668232,-0.10095 2.931981,-0.0548 3.880053,0.0565 c -0.211261,1.33174 -0.242829,2.88099 0.06244,4.64877\
        c 0,0 0.428418,1.44483 1.658865,0.37501 c 1.230447,-1.07054 1.497905,-1.04382 1.497905,-1.04382 c 0,0 0.187671,-0.10685 0,-0.32088\
        c -0.114825,-0.13147 -0.810702,-0.91165 -0.991436,-3.11584"));
        ctx.scale(1/6,1/6);
    },

    number5: (ctx) => {
        ctx.scale(6,6);
        drawSvgPath(ctx, svgPathToCommands("m 11,10 c -0.959924,-0.42004 -2.606351,-0.24389 -4.294816,0.0375 c -0.09832,-1.30283 -0.06393,-2.24399 0.03022,-2.94717\
        c 0.21957,0.0841 0.445045,0.15738 0.681292,0.20776 c 0.595479,0.1268 1.208329,0.14974 1.814926,0.10283 c 0.566992,-0.0441 1.154828,-0.0844 1.714869,-0.18761\
        c 0.745565,-0.13792 0.774054,-0.84874 0.66948,-1.43728 c -0.05698,-0.31963 -0.40544,-1.9855 -0.964093,-1.51058 c -1.048863,0.89183 -2.31417,1.49808 -3.607618,1.47758\
        c 0.05281,-0.15877 0.104574,-0.30156 0.151128,-0.43254 c 0.116039,-0.32762 -0.268208,-0.40161 -0.268208,-0.40161 c 0,0 -0.830336,-0.29462 -1.661366,-0.29462\
        c -0.420033,0 -0.586099,0.17788 -0.648288,0.35367 c -0.09554,-0.0246 -0.185175,-0.0305 -0.257091,0.004 c -0.143485,0.0684 0.02745,0.32658 0.267514,0.59756\
        c 0.174057,1.06624 0.950196,3.3005 1.462989,4.59396 c -0.236594,0.10595 -0.347421,0.3349 -0.108048,0.31927 c 0.08025,-0.006 0.156339,-0.006 0.233467,-0.008\
        c 0.09137,0.22027 0.17093,0.40197 0.228602,0.51766 c 0.401619,0.80393 0.348116,0 0.348116,0 c -0.0198,-0.17823 -0.03579,-0.34603 -0.05142,-0.51279\
        c 3.094825,0.19594 3.343926,3.04896 2.630671,4.09123 c -3.824062,-0.4044 -5.126543,-2.13838 -5.126543,-2.13838 c -3.262629,6.43076 8.856105,2.21828 6.808407,2.22245\
        c -0.06324,0.00034 -0.12403,-0.00099 -0.186566,-0.002 c 1.951811,-1.52275 2.021642,-3.82546 0.132368,-4.65197 z"));
        ctx.scale(1/6,1/6);
    },

    diamond: (ctx) => {
        const w = 70;
        const h = 80;

        // Expected bounding box requires these offsets
        const offsetX = 75 - w;
        const offsetY = 100 - h;
        const points = [
            [1, 0],
            [2, 1],
            [1, 2],
            [0, 1],
        ].map((point) => [(point[0] * w) + offsetX, (point[1] * h) + offsetY]);
        const curveX = 1.46;
        const curveY = 0.6;
        const interps = [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 0],
        ].map((v) => [
            ([curveX, 2 - curveX][v[0]] * w) + offsetX,
            ([curveY, 2 - curveY][v[1]] * h) + offsetY,
        ]);

        ctx.beginPath();
        ctx.moveTo(...points[0]);
        ctx.quadraticCurveTo(...interps[0], ...points[1]);
        ctx.quadraticCurveTo(...interps[1], ...points[2]);
        ctx.quadraticCurveTo(...interps[2], ...points[3]);
        ctx.quadraticCurveTo(...interps[3], ...points[0]);
        ctx.closePath();
    },

    club: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(50, 180);
        ctx.lineTo(100, 180);
        ctx.quadraticCurveTo(80, 140, 75, 120);
        ctx.arc(110, 110, 35, 2.6779, 4.712, true);
        ctx.arc(75, 50, 35, 1, 2.1416, true);
        ctx.arc(40, 110, 35, 4.712, 0.4636, true);
        ctx.quadraticCurveTo(70, 140, 50, 180);
        ctx.closePath();
    },

    star: (ctx) => {
        // From: https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
        let rot = Math.PI / 2 * 3;
        const cx = 75;
        const cy = 100;
        const outerRadius = 75;
        const innerRadius = 30;
        const step = Math.PI / 5;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < 5; i++) {
            const x1 = cx + (Math.cos(rot) * outerRadius);
            const y1 = cy + (Math.sin(rot) * outerRadius);
            ctx.lineTo(x1, y1);
            rot += step;

            const x2 = cx + (Math.cos(rot) * innerRadius);
            const y2 = cy + (Math.sin(rot) * innerRadius);
            ctx.lineTo(x2, y2);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
    },

    heart: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(75, 65);
        ctx.bezierCurveTo(75, 57, 70, 45, 50, 45);
        ctx.bezierCurveTo(20, 45, 20, 82, 20, 82);
        ctx.bezierCurveTo(20, 100, 40, 122, 75, 155);
        ctx.bezierCurveTo(110, 122, 130, 100, 130, 82);
        ctx.bezierCurveTo(130, 82, 130, 45, 100, 45);
        ctx.bezierCurveTo(85, 45, 75, 57, 75, 65);
        ctx.closePath();
    },

    crescent: (ctx) => {
        ctx.beginPath();
        ctx.arc(75, 100, 75, 3, 4.3, true);
        ctx.arc(48, 83, 52, 5, 2.5, false);
        ctx.closePath();
    },

    flower: (ctx) => {
        ctx.text = '✿';
        ctx.font = '190px Verdana';
        ctx.textX = -10;
        ctx.textY = 155;
    },

    spade: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(50, 180);
        ctx.lineTo(100, 180);
        ctx.quadraticCurveTo(80, 140, 75, 120);
        ctx.arc(110, 110, 35, 2.6779, 5.712, true);
        ctx.lineTo(75, 0);
        ctx.arc(40, 110, 35, 3.712, 0.4636, true);
        ctx.quadraticCurveTo(70, 140, 50, 180);
        ctx.closePath();
    },

    number_sign: (ctx) => {
        ctx.text = '#';
        ctx.font = '190px Verdana';
        ctx.textX = -3;
        ctx.textY = 170;
    },

    circle: (ctx) => {
        ctx.beginPath();
        ctx.arc(75, 100, 75, 0, 2 * Math.PI);
        ctx.closePath();
    },

    tensor_symbol: (ctx) => {
        ctx.text = '⊗';
        ctx.font = '170px Verdana';
        ctx.textX = -9;
        ctx.textY = 150;
    },

    infinity: (ctx) => {
        ctx.text = '∞';
        ctx.font = '175px Verdana';
        ctx.textX = -10;
        ctx.textY = 155;
    },

    null_symbol: (ctx) => {
        ctx.text = '∅';
        ctx.font = '210px Verdana';
        ctx.textX = 10;
        ctx.textY = 165;
    },

    rainbow: (ctx) => {
        ctx.beginPath();
        ctx.moveTo(0, 140);
        ctx.arc(75, 140, 75, Math.PI, 0, false);
        ctx.lineTo(125, 140);
        ctx.arc(75, 140, 25, 0, Math.PI, true);
        ctx.lineTo(0, 140);
        ctx.closePath();
    },
};

export default function drawPip(ctx, suit, shadow, deckBack) {
    if (suit.pip === 'rainbow') {
        var suits = [{'pip': 'rainbow_red', 'fill':'#ff0000'}, {'pip': 'rainbow_green', 'fill':'#02ec00'}, {'pip': 'rainbow_white', 'fill':'#ffffff'}, {'pip': 'rainbow_blue', 'fill':'#0037ff'}, {'pip': 'rainbow_yellow', 'fill':'#ffff00'}, {'pip': 'rainbow_center', 'fill':'#ffffff'}]
        for (let s of suits) {
            drawPip(ctx, s, shadow, deckBack)
        }
        return;
    }
    // Each suit has a shape defined in the "suits.json" file (as the "pip" property)
    // Draw the respective shape on the canvas
    // (or, for text pips, define the type of text)
    shapeFunctions[suit.pip](ctx);

    // Some pips are canvas line drawings and some pips are text characters
    const isTextShape = textShapes.includes(suit.pip);

    // Determine the fill
    if (deckBack) {
        // Pips on the back of the deck should be gray
        ctx.fillStyle = '#444444';
    } else if (suit.fill === 'rainbow') {
        // Rainbow cards have a gradient fill
        ctx.fillStyle = evenRadialGradient(ctx, suit.fillColors, [75, 150, 25, 75, 150, 75]);
    } else {
        // All other suits have a solid fill
        ctx.fillStyle = suit.fill;
    }

    // Fill in the shape
    if (shadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    }
    if (isTextShape) {
        ctx.fillText(ctx.text, ctx.textX, ctx.textY);
    } else {
        ctx.fill();
    }

    // Draw a black border around the shape
    ctx.lineWidth = deckBack ? 8 : 5;
    if (shadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    }
    if (isTextShape) {
        ctx.strokeText(ctx.text, ctx.textX, ctx.textY);
    } else {
        ctx.stroke();
    }
};

// Generates a radial gradient that is evenly distributed between its component colors
const evenRadialGradient = (ctx, colors, args) => {
    const grad = ctx.createRadialGradient(...args);
    for (let i = 0; i < colors.length; ++i) {
        grad.addColorStop(i / (colors.length - 1), colors[i]);
    }
    return grad;
};
