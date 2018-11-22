const localStorageMock = (function () {
  const permissions = JSON.stringify([{
    _id: '5939a29f8ceb1575eb860262',
    name: 'Organizations',
    path: {
      web: 'organizationManagement',
      backend: [''],
    },
  }, {
    _id: '5939a2748ceb1575eb860261',
    name: 'Roles',
    path: {
      web: 'rolesManagement',
      backend: [''],
    },
  }, {
    _id: '5925bdccbece268fa72a9264',
    name: 'Activities and Amenities',
    path: {
      web: 'activity',
      backend: [''],
    },
  }, {
    _id: '5925bdacbece268fa72a9263',
    name: 'Reports',
    path: {
      web: 'attendance',
      path: '',
      backend: [],
    },
  }, {
    _id: '5925bd7ebece268fa72a9262',
    name: 'End Users',
    path: {
      web: 'end-user',
      backend: [''],
    },
  }, {
    _id: '5925bd6cbece268fa72a9261',
    name: 'Tiers',
    path: {
      web: 'tiers',
      backend: [''],
    },
  }, {
    _id: '5910f52da92a024456892bdb',
    name: 'Users',
    path: {
      web: 'usersManagement',
      backend: ['user', 'users'],
    },
  }, {
    _id: '5910f522a92a024456892bda',
    name: 'Request',
    path: {
      web: 'request',
      backend: [''],
    },
  }, {
    _id: '5910f506a92a024456892bd8',
    name: 'Companies',
    path: {
      web: 'companies',
      backend: [''],
    },
  }, {
    _id: '5910f4f2a92a024456892bd7',
    name: 'Non-partners',
    path: {
      backend: [],
    },
  }]);
  let store = { permissions, loginToken: '123' };
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
}());
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
var socketMock;
var windowMock;
var address = 'ws://test.address';
const webSocketMock = (function() {
  var WebSocket = jasmine.createSpy();
  WebSocket.and.callFake(function (url) {
    socketMock = {
      url: url,
      readyState: WebSocket.CONNECTING,
      send: jasmine.createSpy(),
      close: jasmine.createSpy().and.callFake(function () {
        socketMock.readyState = WebSocket.CLOSING;
      }),

      // methods to mock the internal behaviour of the real WebSocket
      _open: function () {
        socketMock.readyState = WebSocket.OPEN;
        socketMock.onopen && socketMock.onopen();
      },
      _message: function (msg) {
        socketMock.onmessage && socketMock.onmessage({data: msg});
      },
      _error: function () {
        socketMock.readyState = WebSocket.CLOSED;
        socketMock.onerror && socketMock.onerror();
      },
      _close: function () {
        socketMock.readyState = WebSocket.CLOSED;
        socketMock.onclose && socketMock.onclose();
      }
    };
    return socketMock;
  });
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;
  windowMock = {
    WebSocket: WebSocket
  };
  return WebSocket;
}());
Object.defineProperty(window, 'WebSocket', { value: webSocketMock });
