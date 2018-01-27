/* eslint-env jest */
import edit from '../../pages/edit'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import renderer from 'react-test-renderer';

// Testing getUser
describe('#getUser() using Promises', () => {
	it('should load user data', () => {
		return API.getUser(res.data.user._id)
		.then(res => {
			expect(res.data).toBeDefined()
		})
	})
})