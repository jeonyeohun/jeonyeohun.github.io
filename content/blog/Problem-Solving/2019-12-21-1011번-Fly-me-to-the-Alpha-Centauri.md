---
title: '[백준 알고리즘] 1011번: Fly me to the Alpha Centauri'
date: 2019-12-21 00:00:00
category: Problem-Solving
thumbnail: { thumbnailSrc }
draft: false
comments: true
---

### [1011번: Fly me to the Alpha Centauri](https://www.acmicpc.net/problem/1011)

```
우현이는 어린 시절, 지구 외의 다른 행성에서도 인류들이 살아갈 수 있는 미래가 오리라 믿었다. 그리고 그가 지구라는 세상에 발을 내려 놓은 지 23년이 지난 지금, 세계 최연소 ASNA 우주 비행사가 되어 새로운 세계에 발을 내려 놓는 영광의 순간을 기다리고 있다.
그가 탑승하게 될 우주선은 Alpha Centauri라는 새로운 인류의 보금자리를 개척하기 위한 대규모 생활 유지 시스템을 탑재하고 있기 때문에, 그 크기와 질량이 엄청난 이유로 최신기술력을 총 동원하여 개발한 공간이동 장치를 탑재하였다.
하지만 이 공간이동 장치는 이동 거리를 급격하게 늘릴 경우 기계에 심각한 결함이 발생하는 단점이 있어서, 이전 작동시기에 k광년을 이동하였을 때는 k-1 , k 혹은 k+1 광년만을 다시 이동할 수 있다.

예를 들어, 이 장치를 처음 작동시킬 경우 -1 , 0 , 1 광년을 이론상 이동할 수 있으나 사실상 음수 혹은 0 거리만큼의 이동은 의미가 없으므로 1 광년을 이동할 수 있으며, 그 다음에는 0 , 1 , 2 광년을 이동할 수 있는 것이다. ( 여기서 다시 2광년을 이동한다면 다음 시기엔 1, 2, 3 광년을 이동할 수 있다. ) 김우현은 공간이동 장치 작동시의 에너지 소모가 크다는 점을 잘 알고 있기 때문에 x지점에서 y지점을 향해 최소한의 작동 횟수로 이동하려 한다.

하지만 y지점에 도착해서도 공간 이동장치의 안전성을 위하여 y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 하려 한다.
김우현을 위해 x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 최솟값을 구하는 프로그램을 작성하라.
```

### 접근 방법:

아무리 생각해도 규칙이 찾아지지가 않아서 솔루션을 찾아봤다. 워프하는 거리로 봤을 때, 갈 수 있는 최대거리가 N^2만큼, 그리고 워프 횟수는 2XN-1 이 나온다. 따라서, y-x를 해서 얻은 거리를 최대 이동거리로 나누고 난 나머지가 추가로 가야하는 거리가 되는데, 이 거리는 남은 거리/워프횟수를 올림하면 구할 수 있다. 이 것을 일반화해서 풀면 쉽게 풀리는 문제였다.

- 해결 후: 솔루션을 보고 얻은 것은 for 반복문을 for(;;jum++) 로 쓰면서 while을 무한반복문으로 만들면서 i를 컨트롤해줘야하는 번거로움을 쉽게 해결한 부분이었다. 그리고 테스트 케이스도 번거롭게 for 반복문으로 돌리는게 아니라 while(t--)로 0이되면 바로 끝내는 방식으로 구성하니 훨씬 깔끔하게 코드를 만들 수 있었다. 규칙을 찾는 문제는 항상 어렵게 늦게지는데 소루션을 제시한 사람처럼 표를 만들어서 천천히 규칙을 찾아내는 방식이 좋은 것 같다.

### 통과 코드:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main (){
    int t;
    cin >> t;

    while(t--){
        int x, y;
        cin >> x >> y;

        int d = y-x; // 이동해야하는 거리 구하기

        long long jump = 1;
        for(;;jump++){
            if(jump*jump > d) break; // 점프하는 최고속도 구하기
        }
        jump--;

        long long left = d - (jump * jump); // 규칙대로 최대한 이동하고 남은 거리

        left = (long long)ceil((double)left / (double)jump); // 남은거리를 최고속도로 나누고 올림하면 더 가야하는 거리가 나온다.

        cout << jump * 2 -1 + left << endl;
    }
    return 0;

}
```
