import SmiilePublish from "../src";

test('Open popup', () => {
    window.open = jest.fn();
    const publisher = new SmiilePublish({apiDomain: 'tests.fr'});
    publisher.init = jest.fn().mockImplementation(() => Promise.resolve('http://url-test.com'));
    publisher.publish({
        description: 'Hello ! This is a test.',
        media: [
            'https://picsum.photos/600/400'
        ]
    });
    expect(publisher.init).toBeCalled();
    expect(window.open).toBeCalled();
});

test('Parameters used', () => {
    const testDomain = 'tests.fr';
    const publisher = new SmiilePublish({apiDomain: testDomain});
    expect(publisher.urlTarget).toEqual('https://' + testDomain + '/' + publisher.apiVersion + '/smiile-publish/init');

    const fakePopupParam = 'width=1024,height=780'
    const publisher2 = new SmiilePublish({popupParams: fakePopupParam});
    expect(publisher2.popupParams).toEqual(fakePopupParam);
});

test('Default params', () => {
    const publisher = new SmiilePublish();
    expect(publisher.urlTarget).toEqual('https://api.smiile.com/' + publisher.apiVersion + '/smiile-publish/init');
    expect(publisher.apiDomain).toEqual('api.smiile.com');
    expect(publisher.popupParams).toEqual('width=630,height=500');
});
