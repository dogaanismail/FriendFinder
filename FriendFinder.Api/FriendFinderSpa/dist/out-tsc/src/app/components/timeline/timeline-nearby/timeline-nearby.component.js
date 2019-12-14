import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
/* NgRx */
import { select } from '@ngrx/store';
import * as fromUser from '../../../ngrx/selectors/user.selectors';
let TimelineNearbyComponent = class TimelineNearbyComponent {
    constructor(userStore) {
        this.userStore = userStore;
        this.isTracking = false;
    }
    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.signedUser$ = this.userStore.pipe(select(fromUser.getSignedUser));
    }
    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.showPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    showPosition(position) {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
        }
        else {
            this.marker.setPosition(location);
        }
    }
    trackMe() {
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition((position) => {
                this.showTrackingPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    showTrackingPosition(position) {
        console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
        }
        else {
            this.marker.setPosition(location);
        }
    }
};
tslib_1.__decorate([
    ViewChild('gmap', { static: true })
], TimelineNearbyComponent.prototype, "gmapElement", void 0);
TimelineNearbyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-timeline-nearby',
        templateUrl: './timeline-nearby.component.html',
        styleUrls: ['./timeline-nearby.component.css']
    })
], TimelineNearbyComponent);
export { TimelineNearbyComponent };
//# sourceMappingURL=timeline-nearby.component.js.map