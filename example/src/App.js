import React, { Component } from 'react';
import './App.css';
import { Organization } from 'zeamo-organization-module';

/*const data = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'First',
            type: TYPE_COMPANY,
            children: [
                { name: 'child1', type: TYPE_USER },
                { name: 'child2', type: TYPE_USER }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'Second',
            type: TYPE_LOCATION,
            children: [
                {
                    name: 'Third',
                    children: [
                        { name: 'nested child 1', type: TYPE_USER },
                        { name: 'nested child 2', type: TYPE_USER }
                    ]
                }
            ]
        }
    ]
};*/
/*const data =  { "_id": "5971668bc2f3624490f7bc8b", "name": "root", "description": "Default location", "parent": null, "ancestors": [], "gyms": [], "companies": [], "users": [{ "_id": "591f23cf477298238fb7ff41", "email": "armando@zipdev.co", "isActive": true, "profile": { "name": "Armando", "lastName": "Mendivil" } }, { "_id": "5971668bc2f3624490f7bc89", "email": "junior+owner@zipdev.co", "isActive": true, "profile": { "name": "Testy", "lastName": "McTest" } }], "isActive": true, "children": [{ "_id": "598376475cb362088b86779f", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "598375ad5cb362088b867786", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [{ "_id": "sDfyLTMwa4kbMXixq", "name": "Rafael pro fitness" }, { "_id": "59552f496647bb318476c3cf", "name": "No pencil" }], "companies": [], "users": [], "isActive": true }, { "_id": "5983753c5cb362088b86777f", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "5983750b5cb362088b86777e", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "59836d2774eb1c6fa5a50995", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "59836ccb74eb1c6fa5a50994", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "59836ca474eb1c6fa5a50993", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "59836c4a74eb1c6fa5a5098f", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "59836ab174eb1c6fa5a50988", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "5982475347430a247d5bd84f", "name": "Test node", "description": "Test node description", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [], "companies": [], "users": [], "isActive": true }, { "_id": "598236e247430a247d5bd821", "name": "Location", "description": "Camldsad", "parent": "5971668bc2f3624490f7bc8b", "ancestors": [], "gyms": [{ "_id": "sDfyLTMwa4kbMXixq", "name": "Rafael pro fitness" }], "companies": [], "users": [], "isActive": true }] };*/

const data = {
    "_id": "5968fb9a4e554b40cb624ff9",
    "name": "asdd",
    "description": "Default location",
    "parent": null,
    "ancestors": [],
    "gyms": [{
        "_id": "2r6nwzE2s6NhdEsvs",
        "name": "Anytime Fitness - Mays Landing (Black Horse Pike)"
    }],
    "companies": [],
    "users": [],
    "isActive": false,
    "children": [{
        "_id": "59adac9bc33b8c2efdd0a142",
        "name": "3",
        "description": null,
        "parent": "5968fb9a4e554b40cb624ff9",
        "ancestors": [],
        "gyms": [],
        "companies": [],
        "users": [],
        "isActive": true,
        "children": [{
            "_id": "59adad12c33b8c2efdd0a14c",
            "name": "3.1",
            "description": null,
            "parent": "59adac9bc33b8c2efdd0a142",
            "ancestors": [],
            "gyms": [],
            "companies": [],
            "users": [],
            "isActive": true
        }]
    }, {
        "_id": "59adac97c33b8c2efdd0a141",
        "name": "2",
        "description": null,
        "parent": "5968fb9a4e554b40cb624ff9",
        "ancestors": [],
        "gyms": [],
        "companies": [],
        "users": [],
        "isActive": true,
        "children": [{
            "_id": "59adacb4c33b8c2efdd0a145",
            "name": "2.1",
            "description": null,
            "parent": "59adac97c33b8c2efdd0a141",
            "ancestors": [],
            "gyms": [],
            "companies": [],
            "users": [],
            "isActive": true,
            "children": [{
                "_id": "59adacd7c33b8c2efdd0a148",
                "name": "2.1.1",
                "description": null,
                "parent": "59adacb4c33b8c2efdd0a145",
                "ancestors": [],
                "gyms": [],
                "companies": [],
                "users": [],
                "isActive": true
            }, {
                "_id": "59adaccdc33b8c2efdd0a147",
                "name": "2.1.2",
                "description": null,
                "parent": "59adacb4c33b8c2efdd0a145",
                "ancestors": [],
                "gyms": [],
                "companies": [],
                "users": [],
                "isActive": true,
                "children": [{
                    "_id": "59adace5c33b8c2efdd0a149",
                    "name": "2.1.2.1",
                    "description": null,
                    "parent": "59adaccdc33b8c2efdd0a147",
                    "ancestors": [],
                    "gyms": [],
                    "companies": [],
                    "users": [],
                    "isActive": true
                }]
            }, {
                "_id": "59adacc1c33b8c2efdd0a146",
                "name": "2.1.3",
                "description": null,
                "parent": "59adacb4c33b8c2efdd0a145",
                "ancestors": [],
                "gyms": [],
                "companies": [],
                "users": [],
                "isActive": true
            }]
        }, {
            "_id": "59adacacc33b8c2efdd0a144",
            "name": "2.2",
            "description": null,
            "parent": "59adac97c33b8c2efdd0a141",
            "ancestors": [],
            "gyms": [],
            "companies": [],
            "users": [],
            "isActive": true
        }, {
            "_id": "59adaca6c33b8c2efdd0a143",
            "name": "2.3",
            "description": null,
            "parent": "59adac97c33b8c2efdd0a141",
            "ancestors": [],
            "gyms": [],
            "companies": [],
            "users": [],
            "isActive": true,
            "children": [{
                "_id": "59adacf2c33b8c2efdd0a14a",
                "name": "2.3.1",
                "description": null,
                "parent": "59adaca6c33b8c2efdd0a143",
                "ancestors": [],
                "gyms": [],
                "companies": [],
                "users": [],
                "isActive": true
            }]
        }]
    }, {
        "_id": "59adac85c33b8c2efdd0a13e",
        "name": "1",
        "description": null,
        "parent": "5968fb9a4e554b40cb624ff9",
        "ancestors": [],
        "gyms": [],
        "companies": [],
        "users": [],
        "isActive": true,
        "children": [{
            "_id": "59adac93c33b8c2efdd0a140",
            "name": "1.2",
            "description": null,
            "parent": "59adac85c33b8c2efdd0a13e",
            "ancestors": [],
            "gyms": [],
            "companies": [],
            "users": [],
            "isActive": true
        }, {
            "_id": "59adac8bc33b8c2efdd0a13f",
            "name": "1.1",
            "description": null,
            "parent": "59adac85c33b8c2efdd0a13e",
            "ancestors": [],
            "gyms": [],
            "companies": [],
            "users": [],
            "isActive": true,
            "children": [{
                "_id": "59adad02c33b8c2efdd0a14b",
                "name": "1.1.1",
                "description": null,
                "parent": "59adac8bc33b8c2efdd0a13f",
                "ancestors": [],
                "gyms": [],
                "companies": [],
                "users": [],
                "isActive": true
            }]
        }]
    }]
};

const users = [{ "_id": "5971668bc2f3624490f7bc89", "email": "junior+owner@zipdev.co", "isActive": true, "profile": { "name": "Testy", "lastName": "McTest" }, "verifiedEmail": false }, { "_id": "T4dNAYnJwHf3ojSnz", "email": "junior+owner@zipdev.co", "isActive": true, "profile": { "name": "Michael", "lastName": "Lenny" }, "verifiedEmail": true }, { "_id": "5971b3ddc2f3624490f7bc91", "email": "junior+owner@zipdev.co", "isActive": true, "profile": { "name": "Rafael", "lastName": "GPL" }, "verifiedEmail": false }, { "_id": "i977J7b6ENqTqc5dB", "email": "junior+owner@zipdev.co", "isActive": true, "profile": { "name": "Shunmin", "lastName": "Huang" }, "verifiedEmail": true }];
const companies = [{"_id":"5971668bc2f3624490f7bc8c","isActive":true,"name":"Test's Test's TEst","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-21T02:27:23.663Z","updatedAt":"2017-07-21T02:27:23.663Z","locations":["5971668bc2f3624490f7bc8b"],"roles":[{"_id":"5971668bc2f3624490f7bc8a","name":"Administrator"}],"users":[{"_id":"5971668bc2f3624490f7bc89","email":"rafael+testadmin@zeamo.co","profile":{"name":"Testy","lastName":"McTest"}},{"_id":"T4dNAYnJwHf3ojSnz","email":"josafat+qa22@zipdev.co","profile":{"name":"Michael","lastName":"Lenny"}},{"_id":"5971b3ddc2f3624490f7bc91","email":"dashius+whatever@gmail.com","profile":{"name":"Rafael","lastName":"GPL"}},{"_id":"i977J7b6ENqTqc5dB","email":"josafat+qa14@zipdev.co","profile":{"name":"Shunmin","lastName":"Huang"}}],"gyms":[],"phoneNumber":"","address":"","state":"","country":""},{"_id":"597125bddea76c229d2b25d2","isActive":true,"name":"All Permissions","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-20T21:50:53.332Z","updatedAt":"2017-07-20T21:50:53.331Z","locations":["597125bddea76c229d2b25d1"],"roles":[{"_id":"597125bddea76c229d2b25d0","name":"Administrator"}],"users":[{"_id":"597125bddea76c229d2b25cf","email":"junior+allpermissions@zipdev.co","profile":{"name":"All","lastName":"Permissions"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5971241adea76c229d2b25cb","isActive":true,"name":"Comp1","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-20T21:43:54.043Z","updatedAt":"2017-07-20T21:43:54.043Z","termsConditions":{"user":"59712419dea76c229d2b25c8","date":"2017-07-20T21:47:43.054Z"},"locations":["5971241adea76c229d2b25ca"],"roles":[{"_id":"59712419dea76c229d2b25c9","name":"Administrator"}],"users":[{"_id":"59712419dea76c229d2b25c8","email":"armando+qa21@zipdev.co","profile":{"name":"qa","lastName":"dev"}},{"_id":"597a315bd54d445b6623af11","email":"armando+role@zipdev.co","profile":{"name":"role","lastName":"qa"}},{"_id":"597a3603845e8760acd0589c","email":"armando+role2@zipdev.co","profile":{"name":"test","lastName":"role"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5969045aac173848aa7854d0","isActive":true,"name":"test1","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-14T17:50:18.448Z","updatedAt":"2017-07-14T17:50:18.448Z","locations":["5969045aac173848aa7854cf"],"roles":[{"_id":"5969045aac173848aa7854ce","name":"Administrator"}],"users":[],"gyms":[],"phoneNumber":"asd","address":"asd","state":"asd","country":"asd"},{"_id":"5968fb9a4e554b40cb624ffa","isActive":true,"name":"Testing Jr","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-14T17:12:58.375Z","updatedAt":"2017-07-14T17:12:58.375Z","termsConditions":{"user":"5968fbc34e554b40cb624ffb","date":"2017-07-14T17:14:34.792Z"},"locations":["5968fb9a4e554b40cb624ff9"],"roles":[{"_id":"5968fb9a4e554b40cb624ff8","name":"Administrator"}],"users":[{"_id":"5968fb9a4e554b40cb624ff7","email":"junior+owncompany@zipdev.co","profile":{"name":"Junior","lastName":"Martinez"}},{"_id":"5968fbc34e554b40cb624ffb","email":"junior+eee@zipdev.co","profile":{"name":"Test","lastName":"Test"}},{"_id":"5968fc0b4e554b40cb624ffc","email":"junior+w12@zipdev.co","profile":{"name":"jjjjj","lastName":"jj"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5968f3627a166f3cddc08841","isActive":true,"name":"Company4","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-14T16:37:54.282Z","updatedAt":"2017-07-14T16:37:54.282Z","locations":["5968f3627a166f3cddc08840"],"roles":[{"_id":"5968f3627a166f3cddc0883f","name":"Administrator"}],"users":[{"_id":"5968f3627a166f3cddc0883e","email":"armando+it2@zipdev.co","profile":{"name":"dev","lastName":"qa"}},{"_id":"A5rTnEbuXDXR9cNST","email":"josafat+qa1@zipdev.co","profile":{"name":null,"lastName":null}},{"_id":"A5rTnEbuXDXR9cNST","email":"josafat+qa1@zipdev.co","profile":{"name":null,"lastName":null}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5968f1b77d97df01c7d0f15f","isActive":true,"name":"Company 3","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-14T16:30:47.116Z","updatedAt":"2017-07-14T16:30:47.116Z","locations":["5968f1b77d97df01c7d0f15e"],"roles":[{"_id":"5968f1b77d97df01c7d0f15d","name":"Administrator"}],"users":[{"_id":"5968f1b77d97df01c7d0f15c","email":"armando+it1@zipdev.co","profile":{"name":"dev","lastName":"qa"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5968e4017d97df01c7d0f13b","isActive":true,"name":"Company2","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-14T15:32:17.611Z","updatedAt":"2017-07-14T15:32:17.611Z","termsConditions":{"user":"5968fa7e4e554b40cb624ff5","date":"2017-07-14T17:11:17.755Z"},"locations":["5968e4017d97df01c7d0f13a"],"roles":[{"_id":"5968e4017d97df01c7d0f139","name":"Administrator"}],"users":[{"_id":"5968e4017d97df01c7d0f138","email":"josafat+company02@zipdev.co","profile":{"name":"NAme","lastName":"NAme"}},{"_id":"5968e9747d97df01c7d0f147","email":"junior+teste@zipdev.co","profile":{"name":"Test","lastName":"test"}},{"_id":"iGg2H3Db9MccWe2mb","email":"sergio+owner1999@zipdev.co","profile":{"name":"Sergio","lastName":"Owner"}},{"_id":"5968fa7e4e554b40cb624ff5","email":"junior+testqwq@zipdev.co","profile":{"name":"Test","lastName":"test"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5967cc627d97df01c7d0f0f0","isActive":true,"name":"Summer inc.","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-13T19:39:14.357Z","updatedAt":"2017-07-13T19:39:14.357Z","locations":["5967cc627d97df01c7d0f0ef"],"roles":[{"_id":"5967cc627d97df01c7d0f0ee","name":"Administrator"}],"users":[{"_id":"5967cc627d97df01c7d0f0ed","email":"josafat+summer1@zipdev.co","profile":{"name":"Summer","lastName":"TimeAs"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"596523610c3283761c8b37ff","isActive":true,"name":"Pls dont","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-11T19:13:37.350Z","updatedAt":"2017-07-11T19:13:37.350Z","termsConditions":{"user":"5967a629404fdf61f159a173","date":"2017-07-13T17:07:44.905Z"},"locations":["596523610c3283761c8b37fe","596fb1de56a1e670d62933e2"],"roles":[{"_id":"596523610c3283761c8b37fd","name":"Administrator"},{"_id":"596f73945a53525b5bc4c840","name":"Testing"},{"_id":"596f739e5a53525b5bc4c841","name":"Paginate object 2"},{"_id":"596f73a95a53525b5bc4c842","name":"Role Paginate"},{"_id":"596f73b55a53525b5bc4c843","name":"Role 4"}],"users":[{"_id":"596523610c3283761c8b37fc","email":"josafat+sadin1@zipdev.co","profile":{"name":"sadin","lastName":"dainsd"}},{"_id":"aSiYQDG8Jg6cWdx2i","email":"junior+owner3@zipdev.co","profile":{"name":"Junior Owner","lastName":"rd"}},{"_id":"RvTBtopogw7HxJxZj","email":"rasdasd@dasdac.com","profile":{"name":"tester","lastName":"sdas"}},{"_id":"6WywsjdQkna3Mwmpy","email":"seasd@asdasc.com","profile":{"name":"Sergio","lastName":"Testing"}},{"_id":"uv6NMHM4Jur2QLesR","email":"adasdadł@adsasd.com","profile":{"name":"onmouseover","lastName":"asdasda"}},{"_id":"pybs8DKZQfq5P6scc","email":"tking@zeamo.com","profile":{"name":"Travis","lastName":"King"}},{"_id":"n8BhDicXutzF5vtzv","email":"adsfasdf@zipdev.co","profile":{"name":"test","lastName":"test"}},{"_id":"n8BhDicXutzF5vtzv","email":"adsfasdf@zipdev.co","profile":{"name":"test","lastName":"test"}},{"_id":"NMk9bqnDdnTPexCut","email":"sergio+ASD@zipdev.co","profile":{"name":"dfasd","lastName":"dfasd"}},{"_id":"GQfdDJdqDCv9kEYgF","email":"sergio+1234321@zipdev.co","profile":{"name":"asdf","lastName":"asdf"}},{"_id":"Bha6NhTeGMabvHo2h","email":"sergio+fdsa@zipdev.co","profile":{"name":"asdf","lastName":"asdf"}},{"_id":"2uDw9my7sqHoqNRtq","email":"sergio+1234123@zipdev.co","profile":{"name":"sergio","lastName":"testing"}},{"_id":"5967a0a3e6819151676648bb","email":"armando+qa1@zipdev.co","profile":{"name":"qa","lastName":"dev"}},{"_id":"5967a15bf8ac01593f8f3c1b","email":"armando+qa2@zipdev.co","profile":{"name":"dev","lastName":"qa"}},{"_id":"5967a493a116915dba1a24eb","email":"armando+qa3@zipdev.co","profile":{"name":"dev","lastName":"qa"}},{"_id":"5967a629404fdf61f159a173","email":"junior+test111@zipdev.co","profile":{"name":"Junior","lastName":"Test"}},{"_id":"5967a8f54a731769b3e1e8c1","email":"junior+test112@zipdev.co","profile":{"name":"Junior","lastName":"Test"}}],"gyms":["95aASuwe4zFpc7pTK","595690d862e4af5e679a3fa1","5956976662e4af5e679a3fb0","sDfyLTMwa4kbMXixq","585c57515c01594eb6cfbc9a"],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5965225ce0dd6465bd205553","isActive":true,"name":"Glorious abs","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-11T19:09:16.443Z","updatedAt":"2017-07-11T19:09:16.443Z","locations":["5965225ce0dd6465bd205552"],"roles":[{"_id":"5965225ce0dd6465bd205551","name":"Administrator"}],"users":[{"_id":"5965225ce0dd6465bd205550","email":"josafat+noabs1@zipdev.co","profile":{"name":"John","lastName":"Absono"}},{"_id":"59654c43b8ca630ec262ea1f","email":"junior+sdad@zipdev.co","profile":{"name":"Junior","lastName":"Aad"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"596500ff09c5cf5c820dd8f7","isActive":true,"name":"Stefan Centre","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-11T16:46:55.150Z","updatedAt":"2017-07-11T16:46:55.150Z","locations":["596500ff09c5cf5c820dd8f6"],"roles":[{"_id":"596500ff09c5cf5c820dd8f5","name":"Administrator"}],"users":[{"_id":"596500ff09c5cf5c820dd8f4","email":"armando+s1@zipdev.co","profile":{"name":"stefan","lastName":"centre"}}],"gyms":["5963e7bafe27f037ef92db60"],"phoneNumber":"","address":"","state":"","country":""},{"_id":"5963ea34fe27f037ef92db6c","isActive":true,"name":"Stefan","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-10T20:57:24.996Z","updatedAt":"2017-07-10T20:57:24.996Z","locations":["5963ea34fe27f037ef92db6b"],"roles":[{"_id":"5963ea34fe27f037ef92db6a","name":"Administrator"}],"users":[{"_id":"5963ea34fe27f037ef92db69","email":"armando+stefan@zipdev.co","profile":{"name":"stefan","lastName":"center"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"595fcb226174d1731f240493","isActive":true,"name":"suero","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-07T17:55:46.380Z","updatedAt":"2017-07-07T17:55:46.380Z","locations":["595fcb226174d1731f240492"],"roles":[{"_id":"595fcb226174d1731f240491","name":"Administrator"}],"users":[{"_id":"596510a3e0dd6465bd205535","email":"junior+test@zipdev.co","profile":{"name":"Junior","lastName":"Test"}},{"_id":"59652e25f515287f36c78236","email":"junior+asd123@zipdev.co","profile":{"name":"asdasd","lastName":"dsfsdf"}}],"gyms":["2eE8YKs9ZL8XTWkq6","5963e7bafe27f037ef92db60"],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"595e71cd001c693ae178f4a7","isActive":true,"name":"Anytime Fitness","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-07-06T17:22:21.369Z","updatedAt":"2017-07-06T17:22:21.369Z","locations":["595e71cd001c693ae178f4a6"],"roles":[{"_id":"595e71cd001c693ae178f4a5","name":"Administrator"}],"users":[{"_id":"595e71cd001c693ae178f4a4","email":"tking@zeamo.com","profile":{"name":"Test","lastName":"King"}}],"gyms":["5963e7bafe27f037ef92db60"],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5956aac11f316e0ef971c309","isActive":true,"name":"JEST","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-30T19:47:13.700Z","updatedAt":"2017-06-30T19:47:13.700Z","termsConditions":{"user":"5956aac11f316e0ef971c306","date":"2017-07-03T15:51:47.223Z"},"locations":["5956aac11f316e0ef971c308"],"roles":[{"_id":"5956aac11f316e0ef971c307","name":"Administrator"}],"users":[{"_id":"5956aac11f316e0ef971c306","email":"armando+jest@zipdev.co","profile":{"name":"User ","lastName":"Test"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5956a4214158a90636112231","isActive":true,"name":"MOCHA","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-30T19:18:57.092Z","updatedAt":"2017-06-30T19:18:57.092Z","locations":["5956a4214158a90636112230"],"roles":[{"_id":"5956a4204158a9063611222f","name":"Administrator"}],"users":[{"_id":"5956a4204158a9063611222e","email":"armando+mocha@zipdev.co","profile":{"name":"User","lastName":"Test"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5956a3a94158a9063611222d","isActive":true,"name":"AVA","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-30T19:16:57.950Z","updatedAt":"2017-06-30T19:16:57.950Z","locations":["5956a3a94158a9063611222c"],"roles":[{"_id":"5956a3a94158a9063611222b","name":"Administrator"}],"users":[{"_id":"5956a3a94158a9063611222a","email":"armando+ava@zipdev.co","profile":{"name":"User","lastName":"Test"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5956828c62e4af5e679a3f9d","isActive":true,"name":"ZEIT","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-30T16:55:40.736Z","updatedAt":"2017-06-30T16:55:40.736Z","locations":["5956828c62e4af5e679a3f9c"],"roles":[{"_id":"5956828c62e4af5e679a3f9b","name":"administrator"}],"users":[{"_id":"5956828c62e4af5e679a3f9a","email":"armando+n1@zipdev.co","profile":{"name":"Dan","lastName":"Smith"}}],"gyms":["585c57515c01594eb6cfb892"],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5956823262e4af5e679a3f99","isActive":true,"name":"MicroSmooth","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-30T16:54:10.132Z","updatedAt":"2017-06-30T16:54:10.132Z","locations":["5956823262e4af5e679a3f98"],"roles":[{"_id":"5956823162e4af5e679a3f97","name":"administrator"}],"users":[{"_id":"5956823162e4af5e679a3f96","email":"armando+m1@gmail.com","profile":{"name":"Billy","lastName":"Joe"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5956820462e4af5e679a3f95","isActive":true,"name":"Demo's","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-30T16:53:24.545Z","updatedAt":"2017-06-30T16:53:24.545Z","locations":["5956820462e4af5e679a3f94"],"roles":[{"_id":"5956820462e4af5e679a3f93","name":"administrator"}],"users":[{"_id":"5956820462e4af5e679a3f92","email":"erick+owner33@zipdev.co","profile":{"name":"Erick","lastName":"Gaillard"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"59556e74ee2d2e452b6bc3f2","isActive":true,"name":"My company","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-29T21:17:40.002Z","updatedAt":"2017-06-29T21:17:40.002Z","locations":["59556e73ee2d2e452b6bc3f1"],"roles":[{"_id":"59556e73ee2d2e452b6bc3f0","name":"administrator"}],"users":[{"_id":"59556e73ee2d2e452b6bc3ef","email":"dashius@gmail.com","profile":{"name":"ElRafa","lastName":"Suapellido"}}],"gyms":[],"phoneNumber":null,"address":null,"state":null,"country":null},{"_id":"5955617fee2d2e452b6bc3e1","isActive":true,"name":"Taylors Gym's","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-29T20:22:23.656Z","updatedAt":"2017-06-29T20:22:23.656Z","termsConditions":{"user":"59713020dea76c229d2b262e","date":"2017-07-20T22:36:31.351Z"},"locations":["5955617fee2d2e452b6bc3e0","59712bcadea76c229d2b25e2","59712bd7dea76c229d2b25e3","59712c00dea76c229d2b25e4","597137cdf1a19a3c29f9d13f","5971424ac2f3624490f7bc6e","597245d6c2f3624490f7bcc5"],"roles":[{"_id":"5955617fee2d2e452b6bc3df","name":"Administrator"},{"_id":"595561eaee2d2e452b6bc3e2","name":"Manager"},{"_id":"595e47631f316e0ef971c446","name":"Janitor"},{"_id":"595e47ed1f316e0ef971c447","name":"Front Desk"},{"_id":"59712da9dea76c229d2b25f1","name":"Reduced Admin"}],"users":[{"_id":"5955617fee2d2e452b6bc3de","email":"taylorhinson@comcast.net","profile":{"name":"Taylor","lastName":"Hinson"}},{"_id":"595693d962e4af5e679a3faf","email":"rafael+owner@zipdev.co","profile":{"name":"ReducedAdminRafa","lastName":"GPL"}},{"_id":"595e7315001c693ae178f4ab","email":"shuang@zeamo.com","profile":{"name":"Shunmin","lastName":"Huang"}},{"_id":"59712b0adea76c229d2b25dd","email":"rafael+2@zipdev.co","profile":{"name":"SuperAdminRafa","lastName":"GPL"}},{"_id":"59713020dea76c229d2b262e","email":"armando+ra@zipdev.co","profile":{"name":"Armando","lastName":"Mendivil"}}],"gyms":["59556200ee2d2e452b6bc3e3","59556289ee2d2e452b6bc3e5","59556df3ee2d2e452b6bc3ed","hSmDWZsgLcBjgqDaW","8xruojqEPZ8HnFKWx","xtyFh58LQAT5m3bc4"],"phoneNumber":"+16198756426","address":"Demo","state":"","country":"us"},{"_id":"594be019ef063c0ddfd81ede","isActive":true,"name":"Better Living inc.","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-22T15:19:53.250Z","updatedAt":"2017-06-22T15:19:53.250Z","termsConditions":{"user":"5953de063455077e0e47499d","date":"2017-06-30T18:30:15.068Z"},"locations":["594be019ef063c0ddfd81edd","597789fcc2f3624490f7bd67","59778a32c2f3624490f7bd68","597a082f92ac5c0be80db760","597a084b92ac5c0be80db761","597a087092ac5c0be80db762"],"roles":[{"_id":"594be018ef063c0ddfd81edc","name":"administrator"},{"_id":"594d5f28ef063c0ddfd81ef3","name":"ROLE "},{"_id":"594d5f31ef063c0ddfd81ef4","name":"Another one"},{"_id":"595292c1a47ec622e18de1d3","name":"Revenue and other"},{"_id":"595a8c161f316e0ef971c42e","name":"Cool"},{"_id":"595e61111f316e0ef971c44c","name":"Another one"},{"_id":"595e61181f316e0ef971c44d","name":"Another one"},{"_id":"595e61201f316e0ef971c44e","name":"Another one"},{"_id":"595e612a1f316e0ef971c44f","name":"Another one"},{"_id":"595e61311f316e0ef971c450","name":"Another one"},{"_id":"595e7e2c001c693ae178f4ad","name":"Another one"},{"_id":"595e7e35001c693ae178f4ae","name":"Another one"},{"_id":"595e7e3d001c693ae178f4af","name":"Another one"},{"_id":"595e7e46001c693ae178f4b0","name":"Another one"},{"_id":"595e7e4e001c693ae178f4b1","name":"Another one"},{"_id":"595e7e5c001c693ae178f4b2","name":"Morty pls"},{"_id":"595e7e65001c693ae178f4b3","name":"Another one"},{"_id":"595e7e6c001c693ae178f4b4","name":"Another one"}],"users":[{"_id":"594be018ef063c0ddfd81edb","email":"josafat+myman1@zipdev.co","profile":{"name":"My","lastName":"Man"}},{"_id":"594bf89fef063c0ddfd81ee0","email":"josafat+user001@zipdev.co","profile":{"name":"REvoa","lastName":"mdaldas"}},{"_id":"595287cdef063c0ddfd81ef9","email":"josafat+ichi@zipdev.co","profile":{"name":"ICHI","lastName":"NI"}},{"_id":"5953de063455077e0e47499d","email":"josafat+morty1@zipdev.co","profile":{"name":"My ","lastName":"man"}},{"_id":"5953de763455077e0e47499e","email":"josafat+morty2@zipdev.co","profile":{"name":"My","lastName":"Man"}},{"_id":"5953ff3081188a1b896003fd","email":"josafat+ni@zipdev.co","profile":{"name":"ghgdh","lastName":"fdh"}},{"_id":"59553cbe6647bb318476c3ef","email":"josafat+isnt@zipdev.co","profile":{"name":"HAmmer","lastName":"Wongt"}},{"_id":"59554d50ee2d2e452b6bc3dd","email":"josafat+another1@zipdev.co","profile":{"name":"Anotehr one","lastName":"aond"}},{"_id":"595e7561001c693ae178f4ac","email":"josafat+user1@zipdev.co","profile":{"name":"Another","lastName":"usr"}},{"_id":"vamN6GF6XuG854cvL","email":"ml+216@zipdev.co","profile":{"name":"Mike 216","lastName":"Mike 216"}},{"_id":"596f8aec7863ce42a52af4d4","email":"josafat+new2@zipdev.co","profile":{"name":"NEw new","lastName":"New"}},{"_id":"597a0af692ac5c0be80db764","email":"josafat+new3@zipdev.co","profile":{"name":"Kimi ","lastName":"no"}}],"gyms":["3NWfmqnNuFnP4YKA6","595d0f2d1f316e0ef971c43f","59552fd86647bb318476c3d2","585c57515c01594eb6cfbc3b","59650d94e0dd6465bd205529","t7KGhSctPihW4axmY","597a3813845e8760acd0589f"],"phoneNumber":"+14344362423","address":"76","state":"","country":"us"},{"_id":"594ae0f8ef063c0ddfd81eda","isActive":true,"name":"Demo","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"__v":0,"createdAt":"2017-06-21T21:11:20.363Z","updatedAt":"2017-06-21T21:11:20.363Z","termsConditions":{"user":"594ae0f7ef063c0ddfd81ed7","date":"2017-06-28T18:10:38.136Z"},"locations":["594ae0f8ef063c0ddfd81ed9","596fd28a7fa0b30e067f8493","5970b25d8053aa50a2e2b21a","5970b2a18053aa50a2e2b21b","597130a5dea76c229d2b263e","597130bedea76c229d2b2643","597130ffdea76c229d2b2647","597131d4dea76c229d2b2658","597132a4dea76c229d2b2659","597132b4dea76c229d2b265a"],"roles":[{"_id":"594ae0f7ef063c0ddfd81ed8","name":"administrator"},{"_id":"59526debef063c0ddfd81ef6","name":"Testing"},{"_id":"59527158ef063c0ddfd81ef8","name":"Test2"},{"_id":"59565ec3ee2d2e452b6bc410","name":"NewRole"}],"users":[{"_id":"5952a076dedebb134514e624","email":"junior+owner@zipdev.co","profile":{"name":"Junior","lastName":"Martinez"}},{"_id":"5952b468c1d5a62a50ad2ec5","email":"junior+routes@zipdev.co","profile":{"name":"Junior","lastName":"Routes"}},{"_id":"59565cbcee2d2e452b6bc40d","email":"junior+testing@zipdev.co","profile":{"name":"Testing","lastName":"User"}}],"gyms":["595c2b551f316e0ef971c437","595c2b7f1f316e0ef971c439","NJpR8WDHSYEJnKNwP","qnE5PKEHCSywrrMMq","zGt4gQtNFkGnKJS3B","59568fc862e4af5e679a3f9f","krwQk7tdCPfYiH6wL"],"phoneNumber":"+16192457895","address":"Adddress Changed..","state":"ca","country":"us"},{"_id":"59777ccb6d63dac7d3465b7c","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.843Z","updatedAt":"2017-07-28T18:23:58.843Z","locations":["59777ccb6d63dac7d3465b7b"],"roles":[{"_id":"5976760be92701bdb5abfcbb","name":"Administrator"}],"users":[{"_id":"m5thYZ6CqcyeR9gso","email":"armando+enduser@zipdev.co","profile":{"name":"Armando Mendivil","activities":[],"currency":"USD","role":"endUser"}}],"gyms":["z3RTQkrk9BYdtaz7o"],"phoneNumber":"+12053205283","address":"Regions Harbert Plaza, 1901 6th Ave N, Birmingham, AL 35203, USA","state":null,"country":"us"},{"_id":"5977a52957ce83cc21958047","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.843Z","updatedAt":"2017-07-28T18:23:58.843Z","locations":["5977a52957ce83cc21958046"],"roles":[{"_id":"5977a52957ce83cc21958045","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["z3RTQkrk9BYdtaz7o"],"phoneNumber":"+12053205283","address":"Regions Harbert Plaza, 1901 6th Ave N, Birmingham, AL 35203, USA","state":null,"country":"us"},{"_id":"5977a52957ce83cc2195804a","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.843Z","updatedAt":"2017-07-28T18:23:58.843Z","locations":["5977a52957ce83cc21958049"],"roles":[{"_id":"5977a52957ce83cc21958048","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["qGEuD5gxz6YCKwGcp"],"phoneNumber":"+12056319331","address":"1303 Decatur Hwy, Gardendale, AL 35071, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3b7","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.843Z","updatedAt":"2017-07-28T18:23:58.843Z","locations":["5977a5c3a846671af32de3b6"],"roles":[{"_id":"5977a5c3a846671af32de3b5","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["z3RTQkrk9BYdtaz7o"],"phoneNumber":"+12053205283","address":"Regions Harbert Plaza, 1901 6th Ave N, Birmingham, AL 35203, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3ba","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.844Z","updatedAt":"2017-07-28T18:23:58.844Z","locations":["5977a5c3a846671af32de3b9"],"roles":[{"_id":"5977a5c3a846671af32de3b8","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["qGEuD5gxz6YCKwGcp"],"phoneNumber":"+12056319331","address":"1303 Decatur Hwy, Gardendale, AL 35071, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3bd","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.844Z","updatedAt":"2017-07-28T18:23:58.844Z","locations":["5977a5c3a846671af32de3bc"],"roles":[{"_id":"5977a5c3a846671af32de3bb","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["gnWQfT9wodqxzfShK"],"phoneNumber":"+12058244243","address":"1550 Montgomery Hwy, Hoover, AL 35216, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3c0","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.844Z","updatedAt":"2017-07-28T18:23:58.844Z","locations":["5977a5c3a846671af32de3bf"],"roles":[{"_id":"5977a5c3a846671af32de3be","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["7sGgJWh3YjqP2pgnK"],"phoneNumber":"+12569719470","address":"6125 University Dr NW, Huntsville, AL 35806, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3c3","name":"24e Health Club","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.844Z","updatedAt":"2017-07-28T18:23:58.844Z","locations":["5977a5c3a846671af32de3c2"],"roles":[{"_id":"5977a5c3a846671af32de3c1","name":"Administrator"}],"users":[{"_id":"t5r6GsDZT4wqGgqn2","email":"agaley@24ehealthclubs.com","profile":{"role":"owner","phoneNumber":"+12059188450","name":"Adam Galey","city":"Birmingham","zipCode":"35203","address":"Regions Harbert Plaza, 1901 6th Ave N, Suite 150, Birmingham, AL 35203, USA","streetAddress":"19016th Ave N","country":"us","state":"AL","lat":33.5186617,"lng":-86.80940240000001}}],"gyms":["bncS92QbZZxpLuqJi"],"phoneNumber":"+12055085053","address":"307 Main St, Trussville, AL 35173, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3c6","name":"24/7 Fitness","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.845Z","updatedAt":"2017-07-28T18:23:58.845Z","locations":["5977a5c3a846671af32de3c5"],"roles":[{"_id":"5977a5c3a846671af32de3c4","name":"Administrator"}],"users":[],"gyms":["Wi6RCTzxabsspn5Z3"],"phoneNumber":"+13086333890","address":"615 S Beltline Hwy E, Scottsbluff, NE 69361, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3c9","name":"Brooklyn Boulders","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.845Z","updatedAt":"2017-07-28T18:23:58.845Z","locations":["5977a5c3a846671af32de3c8"],"roles":[{"_id":"5977a5c3a846671af32de3c7","name":"Administrator"}],"users":[],"gyms":["whbP38yY74ed3zE26"],"phoneNumber":"+13122680002","address":"100 S Morgan St, Chicago, IL 60607, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3cc","name":"Brooklyn Boulders","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.845Z","updatedAt":"2017-07-28T18:23:58.845Z","locations":["5977a5c3a846671af32de3cb"],"roles":[{"_id":"5977a5c3a846671af32de3ca","name":"Administrator"}],"users":[],"gyms":["DpWeYgFudME2bbkqy"],"phoneNumber":"+13478349066","address":"575 Degraw St, Brooklyn, NY 11217, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3cf","name":"Brooklyn Boulders","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.845Z","updatedAt":"2017-07-28T18:23:58.845Z","locations":["5977a5c3a846671af32de3ce"],"roles":[{"_id":"5977a5c3a846671af32de3cd","name":"Administrator"}],"users":[],"gyms":["585c57515c01594eb6cfbc42"],"phoneNumber":"+17184827078","address":"23-10 41st Ave, Long Island City, NY 11101, USA","state":null,"country":"us"},{"_id":"5977a5c3a846671af32de3d2","name":"Brooklyn Boulders","companyType":{"_id":"591b4a3df68116df396cc7e1","name":"owner"},"isActive":true,"createdAt":"2017-07-28T18:23:58.845Z","updatedAt":"2017-07-28T18:23:58.845Z","locations":["5977a5c3a846671af32de3d1"],"roles":[{"_id":"5977a5c3a846671af32de3d0","name":"Administrator"}],"users":[],"gyms":["hceqgyQtSQx3wu7ga"],"phoneNumber":"+16176236700","address":"12A Tyler St, Somerville, MA 02143, USA","state":null,"country":"us"}];

const gyms = [{ "_id": "59552f496647bb318476c3cf", "name": "No pencil", "address": "561 Great South Rd, Rosehill, Papakura 2113, New Zealand", "phoneNumber": "+6455555555", "membership": 130, "country": "nz", "tier": { "_id": "5985030d9f16e2ca25f0aef6", "country": "nz", "min": 126, "max": 150, "price": 55, "split": 13.13, "currency": "USD", "tier_id": "5tdhQ2Fk4RTp6N4TW", "base": { "price": 40.13426736719206 } }, "passes": [{ "_id": "5985030d9f16e2ca25f0aef6", "country": "nz", "min": 126, "max": 150, "price": 55, "split": 13.13, "currency": "USD", "tier_id": "5tdhQ2Fk4RTp6N4TW", "base": { "price": 40.13426736719206 } }] }, { "_id": "sDfyLTMwa4kbMXixq", "name": "Rafael pro fitness", "address": "98, Outer Ring Rd, KEB Colony, New Gurappana Palya, 1st Stage, BTM Layout, Bengaluru, Karnataka 560029, India", "country": "in", "membership": 17000, "phoneNumber": "", "tier": { "_id": "598501219f16e2ca25f0aee7", "country": "in", "min": 15000, "max": 20000, "price": 1500, "split": 1400, "currency": "USD", "tier_id": "5tdhQ2Fk4RTp6N4TW", "base": { "price": 23.49992166692778 } }, "passes": [{ "_id": "598501219f16e2ca25f0aee7", "country": "in", "min": 15000, "max": 20000, "price": 1500, "split": 1400, "currency": "USD", "tier_id": "5tdhQ2Fk4RTp6N4TW", "base": { "price": 23.49992166692778 } }] }, { "_id": "23ToBpsoev5NQSXFa", "name": "Gold's Gym - Fullerton", "address": "Amerige Heights Town Center 1973 W Malvern Ave", "membership": 35, "phoneNumber": "+14127945446", "country": "us", "tier": { "_id": "58bce0b986c39fdc3bc1a28f", "country": "us", "min": 26, "max": 50, "price": 7.5, "split": 5.63, "currency": "USD", "tier_id": "E3Z7LnGbm6dzFBM29", "base": { "price": 7.5 } }, "passes": [{ "_id": "58bce0b986c39fdc3bc1a28f", "country": "us", "min": 26, "max": 50, "price": 7.5, "split": 5.63, "currency": "USD", "tier_id": "E3Z7LnGbm6dzFBM29", "base": { "price": 7.5 } }] }, { "_id": "597f51fc0de0600b817317f1", "name": "Foodmgmm", "address": "7823, Qutab Rd, Prem Nagar, Ram Nagar, Paharganj, New Delhi, Delhi 110055, India", "country": "in", "membership": 17000, "phoneNumber": "+9153423423423", "tier": { "_id": "598501219f16e2ca25f0aee7", "country": "in", "min": 15000, "max": 20000, "price": 1500, "split": 1400, "currency": "USD", "tier_id": "5tdhQ2Fk4RTp6N4TW", "base": { "price": 23.49992166692778 } }, "passes": [{ "_id": "598501219f16e2ca25f0aee7", "country": "in", "min": 15000, "max": 20000, "price": 1500, "split": 1400, "currency": "USD", "tier_id": "5tdhQ2Fk4RTp6N4TW", "base": { "price": 23.49992166692778 } }] }];
class App extends Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(node, t, parent, f){
    console.log(f());
  }
  render() {
    return (
      <Organization
        data={data}
        users={users}
        gyms={gyms}
        companies={gyms}
        showDeleteButton
        onToggle={this.handleToggle}
        style={{ paddingTop: '50px' }}
        handleSubmit={console.log}
      />
    );
  }
}

export default App;
