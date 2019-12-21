const selfAddress = '0xc109156Db22d10fB64E9f0107fd41A863F80e388';
const contractAddress = '0x9c1d8e0c97a2f47c1720853f85838bb9a72d6b9a';
const abi = [
    {
        constant: false,
        inputs: [],
        name: 'resetList',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_rank',
                type: 'string',
            },
            {
                name: '_keyword',
                type: 'string',
            },
        ],
        name: 'setData',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_time',
                type: 'string',
            },
        ],
        name: 'setTime',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: '_time',
                type: 'string',
            },
            {
                name: '_index',
                type: 'uint256',
            },
        ],
        name: 'getData',
        outputs: [
            {
                name: '',
                type: 'string',
            },
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getListLength',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];

module.exports = {
    abi,
    contractAddress,
    selfAddress,
};
