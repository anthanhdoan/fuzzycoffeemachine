const productsData = [
  {
    id: 1,
    name: "Fuzzy Coffee Premium",
    description: "Lorem ipsum dolor sit amet est sit aliqua dolor do amet",
    price: 129.0,
    currency: "€",
    images: [
      "https://s3-alpha-sig.figma.com/img/e618/1d42/4bd4dda52cf08e09922e7554bc3ba6fd?Expires=1663545600&Signature=W0LDDMjSV~LnMeIQhv2-2r2QXMBYO4DAzO5TlO5M8HpMGiNDuU-xQUjtsovEbsbUd2Szl1TvPYC3MldkVfYX8oFjQRvPu6hTfbcEenwrIeIAVnzFcmRLHO97c5moOdxMRVMsLUvkmjiiR1yeFLlH9p0XX05INW8Z4LnfOqvPn5RiOxRHy8CP0VMu~YTfR9O3tFAUBWI7PBvPMiQQf9R2NFxDi0iLtYH8Ovyl7kc~ppd8C-6tX2dBWZEMM7QXinYU0Ms9gn4jgVckcmbcCMRJ9TALWDT-tlrXV0zzqd~Ir-4MaUd4OhLiuggiEiO48qRyMQc7OIsczwzvVYB5G8H6qQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/aa7d/3a3a/be907bf3627dd19e3ef3a08c09c42b15?Expires=1663545600&Signature=MTKiaMJ3QfqS6AEhWIhPraxeCJrK~Dh7XEt3tWVl6yJFKciRLdqa3YP~JnXKmgdziKJpQMLF0SHg8QQHXyANWwaJHYqRUpAxVEJnpXA8BJYD02MmlbAICFS6i3BrGVSz8CI0MQIBeYx33J09ZfNrSwYtWgZaHRJ4HC2fkJPMW1rmlNDdJymciu0q4OI8O6R~17UYl9Rh9KoVtRG8-M7~vud5jGGGjLgIU9b1CbjDYRlS3u5yq3psLEK2alObUvDQhZvNihkOfLbHc3Bxg68KPcQLyQ33Ql5WuaFiJ2YwWAzBibu8h8KvsuZUDIzj0UjHp0FU6ruiw8gskmN4uibJSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/d97d/167f/24ec9792b4fbf79883c60ad2930a1051?Expires=1663545600&Signature=LJItoOIeu9pTCRsjgNBFQE0Ap6W7qOIrNtoRDXy8jdYQjO5KKkbr2Gm0Eqw3UjEQihwNCDvU0fXbKsQ4alBPwzA~AKkvWPsYuwlQayBRLxAbWDWGhOup5CuwRBMimUaBBTqglxlPqllMjJMMRvYY0D3e7BTuMRGPTxtDE8pzfLWFAGH5ADqwN0DX~r~NX-CGpZ9kj9oL4AXPUjEV9Br6NfX5FWD0YfwYMdo4HOViDqUCO0~f6xgZlkdxbOaJ7wld2lwkHFAYrKSR4UABN1-zvBMt~Z0VtFy~O0Xzmf5d-qsN2SAm~7ghQWHplaFmRDa5NEXf~kcZ8m9pDk7p9sMnYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/f9b7/c303/97c0e9ac408df891a0c05a7d19acf254?Expires=1663545600&Signature=gwdwbnZKDM4mIu6XtnAM5gSP7leYOyNgTSHXQWS2jdc-GFngghrSizYIxyzc8sAsfQLWbnjzYCpnDtEjNMB83xjHh5QJwHYWXwRe-F-tSZu1x3u-nzk2MRilNnLf9JN7bKskxUnpKzUUJxT5CGUBpyHGCXsJg-H-3w3WYB4DN7iD3M55J~X8Btu-Y-UxzZlLb7VhvEAO-xtM7fz7PPfBWstX1w7eB7-ntLZeifpEMl1-Gupf9WLueJyBHNIFPQ7vQQiZ6fOZ--CMqLSlKlbyriutQZhJxDkH4P7M~kiR52khbqyIvSSzmKqGDgC4Inw0bzqleJYivqL4tX0o44em0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/c7ae/ee93/7c5364cf655af3d003a175f4c01f4d0b?Expires=1663545600&Signature=aZ9QMr5~MhUBE2~TPBMhl4vE8GZYkdOUPzco3dKwwACEGU9jl10~7u4~nvXGddimx4Pkj0PwQgWb3rhAsgdwn5CVvD3MZWVUm-3rcw-CTMNXAtW2g-QmAIJvRT-MMlOkSDwieVRqpdplTuPE2-xI7pesMA~8UmABB2MFYfk4N-rZqZTOHZ95Zd7DaMV08Aty~LXatZ-BMUtjnn~nnVnOh5A4rPcWN0OJq6kydf1W~A1jvtjh6s3T4az9rVAu8315KlxI5gwdaqgf4j7PMWFCCv8Yc0XTEbkhxvvum5eIDiuyeV~EUHF~IOMEpV7ZBOgR870CcY3DxV~2RF5Eq3LiOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/b488/4f13/f1ac6ed4151a86a6ccdf27541c9f9b24?Expires=1663545600&Signature=OQk9NBQiKxBErF83WEmt91tS3mHDY7bs1jrZzUhGdA7Dt7jBX73g5~7FWX-eKwLnOMIb2vJsK4xoy-nTLJnrSkGe4kYxfQL~XzJBCGnjJpYCIh2Z2~oPMOaJ0giKRXqXRcxNZjM0fO9nPkYih4YQzurLWAx63LPB~KpYvYP2QNlVAclPoLaiFb1PTDo~lXbMOSFsmK2NyUm-OYpWRJkcTxm-HH6UN0KRZdp2V9ZGml4KICND~Q4L0ii2RwRocp7KT2tc3nF5nWj-K-XOe26c7OfY1I0mmqXMRXw7ub-JrcVYF7K6EX1l9awqN9a-tmptt2YiiKS4DENXWkshn2exZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    ],
  },
  {
    id: 2,
    name: "Fuzzy Coffee Standard",
    description: "Lorem ipsum dolor sit amet est sit aliqua dolor do amet",
    price: 99.0,
    currency: "€",
    images: [
      "https://s3-alpha-sig.figma.com/img/958f/ba65/197b8ec07dd66cc25bc321a150178bf2?Expires=1663545600&Signature=IA26hEHTHUhHavuRYM1tlAwqASp5-~qalK2bnGvFMnZgIWKfVSpVPHbfEJKGvYtlD9QrpAinkDqJPc3N4dDI8T-XG0cxRZJGCXK8FUqtMxEzBpn54nZKRvNwdGXQLUjuMIqjvIouZMDnlEDsynzguSufALIyr5CNKLkBocDsiOs91dzlQ9ZDCi~3mbY7JbuRXTkEMJHsNzTBtTzygvgR84~MDGmKDXJXeGKyoPAsmMgjLY6mFLZxqVHMppBdxS7oKFA1pdDQluDyX0rwwEU8N9JbeFu-UA-uXiQShfEc3826tHLkUjO6KL7fHC-6zBdb-Hl811X43vlVIgPzC~kHeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/aa7d/3a3a/be907bf3627dd19e3ef3a08c09c42b15?Expires=1663545600&Signature=MTKiaMJ3QfqS6AEhWIhPraxeCJrK~Dh7XEt3tWVl6yJFKciRLdqa3YP~JnXKmgdziKJpQMLF0SHg8QQHXyANWwaJHYqRUpAxVEJnpXA8BJYD02MmlbAICFS6i3BrGVSz8CI0MQIBeYx33J09ZfNrSwYtWgZaHRJ4HC2fkJPMW1rmlNDdJymciu0q4OI8O6R~17UYl9Rh9KoVtRG8-M7~vud5jGGGjLgIU9b1CbjDYRlS3u5yq3psLEK2alObUvDQhZvNihkOfLbHc3Bxg68KPcQLyQ33Ql5WuaFiJ2YwWAzBibu8h8KvsuZUDIzj0UjHp0FU6ruiw8gskmN4uibJSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/d97d/167f/24ec9792b4fbf79883c60ad2930a1051?Expires=1663545600&Signature=LJItoOIeu9pTCRsjgNBFQE0Ap6W7qOIrNtoRDXy8jdYQjO5KKkbr2Gm0Eqw3UjEQihwNCDvU0fXbKsQ4alBPwzA~AKkvWPsYuwlQayBRLxAbWDWGhOup5CuwRBMimUaBBTqglxlPqllMjJMMRvYY0D3e7BTuMRGPTxtDE8pzfLWFAGH5ADqwN0DX~r~NX-CGpZ9kj9oL4AXPUjEV9Br6NfX5FWD0YfwYMdo4HOViDqUCO0~f6xgZlkdxbOaJ7wld2lwkHFAYrKSR4UABN1-zvBMt~Z0VtFy~O0Xzmf5d-qsN2SAm~7ghQWHplaFmRDa5NEXf~kcZ8m9pDk7p9sMnYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/f9b7/c303/97c0e9ac408df891a0c05a7d19acf254?Expires=1663545600&Signature=gwdwbnZKDM4mIu6XtnAM5gSP7leYOyNgTSHXQWS2jdc-GFngghrSizYIxyzc8sAsfQLWbnjzYCpnDtEjNMB83xjHh5QJwHYWXwRe-F-tSZu1x3u-nzk2MRilNnLf9JN7bKskxUnpKzUUJxT5CGUBpyHGCXsJg-H-3w3WYB4DN7iD3M55J~X8Btu-Y-UxzZlLb7VhvEAO-xtM7fz7PPfBWstX1w7eB7-ntLZeifpEMl1-Gupf9WLueJyBHNIFPQ7vQQiZ6fOZ--CMqLSlKlbyriutQZhJxDkH4P7M~kiR52khbqyIvSSzmKqGDgC4Inw0bzqleJYivqL4tX0o44em0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/c7ae/ee93/7c5364cf655af3d003a175f4c01f4d0b?Expires=1663545600&Signature=aZ9QMr5~MhUBE2~TPBMhl4vE8GZYkdOUPzco3dKwwACEGU9jl10~7u4~nvXGddimx4Pkj0PwQgWb3rhAsgdwn5CVvD3MZWVUm-3rcw-CTMNXAtW2g-QmAIJvRT-MMlOkSDwieVRqpdplTuPE2-xI7pesMA~8UmABB2MFYfk4N-rZqZTOHZ95Zd7DaMV08Aty~LXatZ-BMUtjnn~nnVnOh5A4rPcWN0OJq6kydf1W~A1jvtjh6s3T4az9rVAu8315KlxI5gwdaqgf4j7PMWFCCv8Yc0XTEbkhxvvum5eIDiuyeV~EUHF~IOMEpV7ZBOgR870CcY3DxV~2RF5Eq3LiOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/b488/4f13/f1ac6ed4151a86a6ccdf27541c9f9b24?Expires=1663545600&Signature=OQk9NBQiKxBErF83WEmt91tS3mHDY7bs1jrZzUhGdA7Dt7jBX73g5~7FWX-eKwLnOMIb2vJsK4xoy-nTLJnrSkGe4kYxfQL~XzJBCGnjJpYCIh2Z2~oPMOaJ0giKRXqXRcxNZjM0fO9nPkYih4YQzurLWAx63LPB~KpYvYP2QNlVAclPoLaiFb1PTDo~lXbMOSFsmK2NyUm-OYpWRJkcTxm-HH6UN0KRZdp2V9ZGml4KICND~Q4L0ii2RwRocp7KT2tc3nF5nWj-K-XOe26c7OfY1I0mmqXMRXw7ub-JrcVYF7K6EX1l9awqN9a-tmptt2YiiKS4DENXWkshn2exZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    ],
  },
  {
    id: 3,
    name: "Fuzzy Coffee Home",
    description: "Lorem ipsum dolor sit amet est sit aliqua dolor do amet",
    price: 79.0,
    currency: "€",
    images: [
      "https://s3-alpha-sig.figma.com/img/6d22/0310/10a13c5418da2acb9b72a4a5b582b904?Expires=1663545600&Signature=gE8wkSdCbBAfq6fxIQCEWd-JEfKHxTAlfNMt28S5FDRwTJO9CZl13gRYKFqVRrYc8aKVX35hHtJKNN3miiKuK8~nlJdNjyjKJuCvjoEjjAkd~W5oK11Hi74-keXQ0Cs9uckYUfDLimInYV5M-A84m9JrxfdZQ9bGRrZrAt7XiSFCRhei5hKhueIE1hiYuuEEyn8YVRTKawCm1bXViD6Z76BIdC3z4BN4xNIT-xW5oLscoNEPfOoSkFSYwE66uZ9min5tdZYj-Ubte50SZPbV2ywfNdaAMEb37WNmzaBAw72lCwRNg4zQGwvB-3SvYh-tjQGKhjaIDocO95Nr1wgCGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/aa7d/3a3a/be907bf3627dd19e3ef3a08c09c42b15?Expires=1663545600&Signature=MTKiaMJ3QfqS6AEhWIhPraxeCJrK~Dh7XEt3tWVl6yJFKciRLdqa3YP~JnXKmgdziKJpQMLF0SHg8QQHXyANWwaJHYqRUpAxVEJnpXA8BJYD02MmlbAICFS6i3BrGVSz8CI0MQIBeYx33J09ZfNrSwYtWgZaHRJ4HC2fkJPMW1rmlNDdJymciu0q4OI8O6R~17UYl9Rh9KoVtRG8-M7~vud5jGGGjLgIU9b1CbjDYRlS3u5yq3psLEK2alObUvDQhZvNihkOfLbHc3Bxg68KPcQLyQ33Ql5WuaFiJ2YwWAzBibu8h8KvsuZUDIzj0UjHp0FU6ruiw8gskmN4uibJSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/d97d/167f/24ec9792b4fbf79883c60ad2930a1051?Expires=1663545600&Signature=LJItoOIeu9pTCRsjgNBFQE0Ap6W7qOIrNtoRDXy8jdYQjO5KKkbr2Gm0Eqw3UjEQihwNCDvU0fXbKsQ4alBPwzA~AKkvWPsYuwlQayBRLxAbWDWGhOup5CuwRBMimUaBBTqglxlPqllMjJMMRvYY0D3e7BTuMRGPTxtDE8pzfLWFAGH5ADqwN0DX~r~NX-CGpZ9kj9oL4AXPUjEV9Br6NfX5FWD0YfwYMdo4HOViDqUCO0~f6xgZlkdxbOaJ7wld2lwkHFAYrKSR4UABN1-zvBMt~Z0VtFy~O0Xzmf5d-qsN2SAm~7ghQWHplaFmRDa5NEXf~kcZ8m9pDk7p9sMnYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/f9b7/c303/97c0e9ac408df891a0c05a7d19acf254?Expires=1663545600&Signature=gwdwbnZKDM4mIu6XtnAM5gSP7leYOyNgTSHXQWS2jdc-GFngghrSizYIxyzc8sAsfQLWbnjzYCpnDtEjNMB83xjHh5QJwHYWXwRe-F-tSZu1x3u-nzk2MRilNnLf9JN7bKskxUnpKzUUJxT5CGUBpyHGCXsJg-H-3w3WYB4DN7iD3M55J~X8Btu-Y-UxzZlLb7VhvEAO-xtM7fz7PPfBWstX1w7eB7-ntLZeifpEMl1-Gupf9WLueJyBHNIFPQ7vQQiZ6fOZ--CMqLSlKlbyriutQZhJxDkH4P7M~kiR52khbqyIvSSzmKqGDgC4Inw0bzqleJYivqL4tX0o44em0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/c7ae/ee93/7c5364cf655af3d003a175f4c01f4d0b?Expires=1663545600&Signature=aZ9QMr5~MhUBE2~TPBMhl4vE8GZYkdOUPzco3dKwwACEGU9jl10~7u4~nvXGddimx4Pkj0PwQgWb3rhAsgdwn5CVvD3MZWVUm-3rcw-CTMNXAtW2g-QmAIJvRT-MMlOkSDwieVRqpdplTuPE2-xI7pesMA~8UmABB2MFYfk4N-rZqZTOHZ95Zd7DaMV08Aty~LXatZ-BMUtjnn~nnVnOh5A4rPcWN0OJq6kydf1W~A1jvtjh6s3T4az9rVAu8315KlxI5gwdaqgf4j7PMWFCCv8Yc0XTEbkhxvvum5eIDiuyeV~EUHF~IOMEpV7ZBOgR870CcY3DxV~2RF5Eq3LiOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      "https://s3-alpha-sig.figma.com/img/b488/4f13/f1ac6ed4151a86a6ccdf27541c9f9b24?Expires=1663545600&Signature=OQk9NBQiKxBErF83WEmt91tS3mHDY7bs1jrZzUhGdA7Dt7jBX73g5~7FWX-eKwLnOMIb2vJsK4xoy-nTLJnrSkGe4kYxfQL~XzJBCGnjJpYCIh2Z2~oPMOaJ0giKRXqXRcxNZjM0fO9nPkYih4YQzurLWAx63LPB~KpYvYP2QNlVAclPoLaiFb1PTDo~lXbMOSFsmK2NyUm-OYpWRJkcTxm-HH6UN0KRZdp2V9ZGml4KICND~Q4L0ii2RwRocp7KT2tc3nF5nWj-K-XOe26c7OfY1I0mmqXMRXw7ub-JrcVYF7K6EX1l9awqN9a-tmptt2YiiKS4DENXWkshn2exZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    ],
  },
];

export default productsData;
