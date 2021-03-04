import mock from '../mock';

const nistData = {
    nistRadarChart: [

    ]
}

mock.onGet('/api/nist/radar').reply(() => {
	return [200, cscDB];
});