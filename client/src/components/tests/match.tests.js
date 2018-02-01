import React, { Component } from "react";
import API from "../utils/API";
import { shallow } from "enzyme";
import Match from "../client/src/pages/Match"


describe('<Match />', () => {
	it('calls componentDidMount', () => {
		sinon.spy(Match.prototype, 'componentDidMount');
		const find-match = mount(<Match />);
		expect(Match.prototype.componentDidMount.calledOnce).to.equal(true);
	})
})