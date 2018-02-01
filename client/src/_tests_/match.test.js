
/* eslint-env jest */
import React, { Component } from "react";
import Card from "../components/Card/Card";
import API from "../utils/API";
import Match from "../pages/Match.js";
import { mount} from "enzyme";
import sinon from "sinon"

describe('<Match />', () => {
	it('calls componentDidMount', () => {
		sinon.spy(Match.prototype, 'componentDidMount');
		const users = mount(<Match />);
		expect(Match.prototype.componentDidMount.calledOnce).to.equal(true);

	});
});

