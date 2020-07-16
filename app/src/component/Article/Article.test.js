import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import {expect} from 'chai';
import Article from "./Article";


describe('Article test suite', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Article
                id={1}
            />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("Requires an id to be given as a prop type", () => {
        let stub;

        stub = sinon.stub(console, 'error');

        const div = document.createElement('div');
        ReactDOM.render(<Article/>, div);
        ReactDOM.unmountComponentAtNode(div);

        expect(stub.calledOnce).to.equal(true);
        expect(
            stub.calledWithExactly(
                "Warning: Failed prop type: The prop `id` is marked as required in `Article`, but its value is `undefined`.\n" +
                "    in Article (at Article.test.js:24)"
            )).to.equal(true);
    });


});