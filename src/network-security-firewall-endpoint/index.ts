/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkSecurityFirewallEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Project to charge for the deployed firewall endpoint.
  * This field is required for organization-scoped endpoints.
  * For project-scoped endpoints, it is optional but must match the
  * endpoint's project if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#billing_project_id NetworkSecurityFirewallEndpoint#billing_project_id}
  */
  readonly billingProjectId?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#deletion_policy NetworkSecurityFirewallEndpoint#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of key/value label pairs to assign to the resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#labels NetworkSecurityFirewallEndpoint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location (zone) of the firewall endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#location NetworkSecurityFirewallEndpoint#location}
  */
  readonly location: string;
  /**
  * The name of the firewall endpoint resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#name NetworkSecurityFirewallEndpoint#name}
  */
  readonly name: string;
  /**
  * The name of the parent this firewall endpoint belongs to.
  * Format: 'organizations/{organization_id}' or 'projects/{project_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#parent NetworkSecurityFirewallEndpoint#parent}
  */
  readonly parent: string;
  /**
  * endpoint_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#endpoint_settings NetworkSecurityFirewallEndpoint#endpoint_settings}
  */
  readonly endpointSettings?: NetworkSecurityFirewallEndpointEndpointSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeouts NetworkSecurityFirewallEndpoint#timeouts}
  */
  readonly timeouts?: NetworkSecurityFirewallEndpointTimeouts;
  /**
  * wildfire_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_settings NetworkSecurityFirewallEndpoint#wildfire_settings}
  */
  readonly wildfireSettings?: NetworkSecurityFirewallEndpointWildfireSettings;
}
export interface NetworkSecurityFirewallEndpointEndpointSettings {
  /**
  * The Palo Alto Networks content cloud region of the firewall endpoint,
  * for example 'US_CENTRAL' or 'CANADA'. See
  * [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#contentcloudregion)
  * for the list of supported regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#content_cloud_region NetworkSecurityFirewallEndpoint#content_cloud_region}
  */
  readonly contentCloudRegion?: string;
  /**
  * Whether to block HTTP partial responses for the firewall endpoint.
  * When 'true', resumption of blocked malicious HTTP file downloads is
  * blocked by the firewall. 'false' provides maximum availability, 'true'
  * provides maximum security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#http_partial_response_blocked NetworkSecurityFirewallEndpoint#http_partial_response_blocked}
  */
  readonly httpPartialResponseBlocked?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether Jumbo Frames are enabled for the firewall endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#jumbo_frames_enabled NetworkSecurityFirewallEndpoint#jumbo_frames_enabled}
  */
  readonly jumboFramesEnabled?: boolean | cdktn.IResolvable;
}

export function networkSecurityFirewallEndpointEndpointSettingsToTerraform(struct?: NetworkSecurityFirewallEndpointEndpointSettingsOutputReference | NetworkSecurityFirewallEndpointEndpointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_cloud_region: cdktn.stringToTerraform(struct!.contentCloudRegion),
    http_partial_response_blocked: cdktn.booleanToTerraform(struct!.httpPartialResponseBlocked),
    jumbo_frames_enabled: cdktn.booleanToTerraform(struct!.jumboFramesEnabled),
  }
}


export function networkSecurityFirewallEndpointEndpointSettingsToHclTerraform(struct?: NetworkSecurityFirewallEndpointEndpointSettingsOutputReference | NetworkSecurityFirewallEndpointEndpointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_cloud_region: {
      value: cdktn.stringToHclTerraform(struct!.contentCloudRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_partial_response_blocked: {
      value: cdktn.booleanToHclTerraform(struct!.httpPartialResponseBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jumbo_frames_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.jumboFramesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityFirewallEndpointEndpointSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityFirewallEndpointEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentCloudRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCloudRegion = this._contentCloudRegion;
    }
    if (this._httpPartialResponseBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPartialResponseBlocked = this._httpPartialResponseBlocked;
    }
    if (this._jumboFramesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFramesEnabled = this._jumboFramesEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityFirewallEndpointEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentCloudRegion = undefined;
      this._httpPartialResponseBlocked = undefined;
      this._jumboFramesEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentCloudRegion = value.contentCloudRegion;
      this._httpPartialResponseBlocked = value.httpPartialResponseBlocked;
      this._jumboFramesEnabled = value.jumboFramesEnabled;
    }
  }

  // content_cloud_region - computed: true, optional: true, required: false
  private _contentCloudRegion?: string; 
  public get contentCloudRegion() {
    return this.getStringAttribute('content_cloud_region');
  }
  public set contentCloudRegion(value: string) {
    this._contentCloudRegion = value;
  }
  public resetContentCloudRegion() {
    this._contentCloudRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCloudRegionInput() {
    return this._contentCloudRegion;
  }

  // http_partial_response_blocked - computed: false, optional: true, required: false
  private _httpPartialResponseBlocked?: boolean | cdktn.IResolvable; 
  public get httpPartialResponseBlocked() {
    return this.getBooleanAttribute('http_partial_response_blocked');
  }
  public set httpPartialResponseBlocked(value: boolean | cdktn.IResolvable) {
    this._httpPartialResponseBlocked = value;
  }
  public resetHttpPartialResponseBlocked() {
    this._httpPartialResponseBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPartialResponseBlockedInput() {
    return this._httpPartialResponseBlocked;
  }

  // jumbo_frames_enabled - computed: false, optional: true, required: false
  private _jumboFramesEnabled?: boolean | cdktn.IResolvable; 
  public get jumboFramesEnabled() {
    return this.getBooleanAttribute('jumbo_frames_enabled');
  }
  public set jumboFramesEnabled(value: boolean | cdktn.IResolvable) {
    this._jumboFramesEnabled = value;
  }
  public resetJumboFramesEnabled() {
    this._jumboFramesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFramesEnabledInput() {
    return this._jumboFramesEnabled;
  }
}
export interface NetworkSecurityFirewallEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}
  */
  readonly update?: string;
}

export function networkSecurityFirewallEndpointTimeoutsToTerraform(struct?: NetworkSecurityFirewallEndpointTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function networkSecurityFirewallEndpointTimeoutsToHclTerraform(struct?: NetworkSecurityFirewallEndpointTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityFirewallEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityFirewallEndpointTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityFirewallEndpointTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings {
  /**
  * The maximum duration for which the firewall endpoint holds a file
  * while waiting for an inline cloud analysis verdict before taking
  * the configured timeout action (1ms to 240000ms, default 30000ms).
  * A duration in seconds with up to nine fractional digits, ending with 's'.
  * Example: "30s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#max_analysis_duration NetworkSecurityFirewallEndpoint#max_analysis_duration}
  */
  readonly maxAnalysisDuration?: string;
  /**
  * Indicates whether logging is disabled when a WildFire inline cloud
  * analysis submission times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#submission_timeout_logging_disabled NetworkSecurityFirewallEndpoint#submission_timeout_logging_disabled}
  */
  readonly submissionTimeoutLoggingDisabled?: boolean | cdktn.IResolvable;
  /**
  * The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeout_action NetworkSecurityFirewallEndpoint#timeout_action}
  */
  readonly timeoutAction?: string;
}

export function networkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsToTerraform(struct?: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference | NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_analysis_duration: cdktn.stringToTerraform(struct!.maxAnalysisDuration),
    submission_timeout_logging_disabled: cdktn.booleanToTerraform(struct!.submissionTimeoutLoggingDisabled),
    timeout_action: cdktn.stringToTerraform(struct!.timeoutAction),
  }
}


export function networkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsToHclTerraform(struct?: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference | NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_analysis_duration: {
      value: cdktn.stringToHclTerraform(struct!.maxAnalysisDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    submission_timeout_logging_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.submissionTimeoutLoggingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_action: {
      value: cdktn.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAnalysisDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAnalysisDuration = this._maxAnalysisDuration;
    }
    if (this._submissionTimeoutLoggingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.submissionTimeoutLoggingDisabled = this._submissionTimeoutLoggingDisabled;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAnalysisDuration = undefined;
      this._submissionTimeoutLoggingDisabled = undefined;
      this._timeoutAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAnalysisDuration = value.maxAnalysisDuration;
      this._submissionTimeoutLoggingDisabled = value.submissionTimeoutLoggingDisabled;
      this._timeoutAction = value.timeoutAction;
    }
  }

  // max_analysis_duration - computed: true, optional: true, required: false
  private _maxAnalysisDuration?: string; 
  public get maxAnalysisDuration() {
    return this.getStringAttribute('max_analysis_duration');
  }
  public set maxAnalysisDuration(value: string) {
    this._maxAnalysisDuration = value;
  }
  public resetMaxAnalysisDuration() {
    this._maxAnalysisDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAnalysisDurationInput() {
    return this._maxAnalysisDuration;
  }

  // submission_timeout_logging_disabled - computed: false, optional: true, required: false
  private _submissionTimeoutLoggingDisabled?: boolean | cdktn.IResolvable; 
  public get submissionTimeoutLoggingDisabled() {
    return this.getBooleanAttribute('submission_timeout_logging_disabled');
  }
  public set submissionTimeoutLoggingDisabled(value: boolean | cdktn.IResolvable) {
    this._submissionTimeoutLoggingDisabled = value;
  }
  public resetSubmissionTimeoutLoggingDisabled() {
    this._submissionTimeoutLoggingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submissionTimeoutLoggingDisabledInput() {
    return this._submissionTimeoutLoggingDisabled;
  }

  // timeout_action - computed: true, optional: true, required: false
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  public resetTimeoutAction() {
    this._timeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }
}
export interface NetworkSecurityFirewallEndpointWildfireSettings {
  /**
  * Indicates whether WildFire is enabled for the firewall endpoint.
  * Enabling WildFire requires accepting the WildFire end-user license
  * agreement (EULA) for the endpoint's billing project; see
  * [Configure WildFire](https://docs.cloud.google.com/firewall/docs/configure-wildfire).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#enabled NetworkSecurityFirewallEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The duration for which the firewall endpoint waits for a real-time
  * signature lookup response from the WildFire cloud before taking the
  * configured timeout action (1ms to 5000ms, default 1000ms).
  * A duration in seconds with up to nine fractional digits, ending with 's'.
  * Example: "1s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_duration NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_duration}
  */
  readonly wildfireRealtimeLookupDuration?: string;
  /**
  * The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_timeout_action NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_timeout_action}
  */
  readonly wildfireRealtimeLookupTimeoutAction?: string;
  /**
  * The WildFire region for the firewall endpoint, for example
  * 'UNITED_STATES' or 'CANADA'. See
  * [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion)
  * for the list of supported regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_region NetworkSecurityFirewallEndpoint#wildfire_region}
  */
  readonly wildfireRegion?: string;
  /**
  * wildfire_inline_cloud_analysis_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_inline_cloud_analysis_settings NetworkSecurityFirewallEndpoint#wildfire_inline_cloud_analysis_settings}
  */
  readonly wildfireInlineCloudAnalysisSettings?: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings;
}

export function networkSecurityFirewallEndpointWildfireSettingsToTerraform(struct?: NetworkSecurityFirewallEndpointWildfireSettingsOutputReference | NetworkSecurityFirewallEndpointWildfireSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    wildfire_realtime_lookup_duration: cdktn.stringToTerraform(struct!.wildfireRealtimeLookupDuration),
    wildfire_realtime_lookup_timeout_action: cdktn.stringToTerraform(struct!.wildfireRealtimeLookupTimeoutAction),
    wildfire_region: cdktn.stringToTerraform(struct!.wildfireRegion),
    wildfire_inline_cloud_analysis_settings: networkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsToTerraform(struct!.wildfireInlineCloudAnalysisSettings),
  }
}


export function networkSecurityFirewallEndpointWildfireSettingsToHclTerraform(struct?: NetworkSecurityFirewallEndpointWildfireSettingsOutputReference | NetworkSecurityFirewallEndpointWildfireSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wildfire_realtime_lookup_duration: {
      value: cdktn.stringToHclTerraform(struct!.wildfireRealtimeLookupDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_realtime_lookup_timeout_action: {
      value: cdktn.stringToHclTerraform(struct!.wildfireRealtimeLookupTimeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_region: {
      value: cdktn.stringToHclTerraform(struct!.wildfireRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_inline_cloud_analysis_settings: {
      value: networkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsToHclTerraform(struct!.wildfireInlineCloudAnalysisSettings),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityFirewallEndpointWildfireSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityFirewallEndpointWildfireSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._wildfireRealtimeLookupDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireRealtimeLookupDuration = this._wildfireRealtimeLookupDuration;
    }
    if (this._wildfireRealtimeLookupTimeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireRealtimeLookupTimeoutAction = this._wildfireRealtimeLookupTimeoutAction;
    }
    if (this._wildfireRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireRegion = this._wildfireRegion;
    }
    if (this._wildfireInlineCloudAnalysisSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireInlineCloudAnalysisSettings = this._wildfireInlineCloudAnalysisSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityFirewallEndpointWildfireSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._wildfireRealtimeLookupDuration = undefined;
      this._wildfireRealtimeLookupTimeoutAction = undefined;
      this._wildfireRegion = undefined;
      this._wildfireInlineCloudAnalysisSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._wildfireRealtimeLookupDuration = value.wildfireRealtimeLookupDuration;
      this._wildfireRealtimeLookupTimeoutAction = value.wildfireRealtimeLookupTimeoutAction;
      this._wildfireRegion = value.wildfireRegion;
      this._wildfireInlineCloudAnalysisSettings.internalValue = value.wildfireInlineCloudAnalysisSettings;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // wildfire_realtime_lookup_duration - computed: true, optional: true, required: false
  private _wildfireRealtimeLookupDuration?: string; 
  public get wildfireRealtimeLookupDuration() {
    return this.getStringAttribute('wildfire_realtime_lookup_duration');
  }
  public set wildfireRealtimeLookupDuration(value: string) {
    this._wildfireRealtimeLookupDuration = value;
  }
  public resetWildfireRealtimeLookupDuration() {
    this._wildfireRealtimeLookupDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireRealtimeLookupDurationInput() {
    return this._wildfireRealtimeLookupDuration;
  }

  // wildfire_realtime_lookup_timeout_action - computed: true, optional: true, required: false
  private _wildfireRealtimeLookupTimeoutAction?: string; 
  public get wildfireRealtimeLookupTimeoutAction() {
    return this.getStringAttribute('wildfire_realtime_lookup_timeout_action');
  }
  public set wildfireRealtimeLookupTimeoutAction(value: string) {
    this._wildfireRealtimeLookupTimeoutAction = value;
  }
  public resetWildfireRealtimeLookupTimeoutAction() {
    this._wildfireRealtimeLookupTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireRealtimeLookupTimeoutActionInput() {
    return this._wildfireRealtimeLookupTimeoutAction;
  }

  // wildfire_region - computed: true, optional: true, required: false
  private _wildfireRegion?: string; 
  public get wildfireRegion() {
    return this.getStringAttribute('wildfire_region');
  }
  public set wildfireRegion(value: string) {
    this._wildfireRegion = value;
  }
  public resetWildfireRegion() {
    this._wildfireRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireRegionInput() {
    return this._wildfireRegion;
  }

  // wildfire_inline_cloud_analysis_settings - computed: false, optional: true, required: false
  private _wildfireInlineCloudAnalysisSettings = new NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference(this, "wildfire_inline_cloud_analysis_settings");
  public get wildfireInlineCloudAnalysisSettings() {
    return this._wildfireInlineCloudAnalysisSettings;
  }
  public putWildfireInlineCloudAnalysisSettings(value: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings) {
    this._wildfireInlineCloudAnalysisSettings.internalValue = value;
  }
  public resetWildfireInlineCloudAnalysisSettings() {
    this._wildfireInlineCloudAnalysisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInlineCloudAnalysisSettingsInput() {
    return this._wildfireInlineCloudAnalysisSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint google_network_security_firewall_endpoint}
*/
export class NetworkSecurityFirewallEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_firewall_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityFirewallEndpoint to import
  * @param importFromId The id of the existing NetworkSecurityFirewallEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityFirewallEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_firewall_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint google_network_security_firewall_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityFirewallEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityFirewallEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_firewall_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.9.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingProjectId = config.billingProjectId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._parent = config.parent;
    this._endpointSettings.internalValue = config.endpointSettings;
    this._timeouts.internalValue = config.timeouts;
    this._wildfireSettings.internalValue = config.wildfireSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_networks - computed: true, optional: false, required: false
  public get associatedNetworks() {
    return this.getListAttribute('associated_networks');
  }

  // billing_project_id - computed: true, optional: true, required: false
  private _billingProjectId?: string; 
  public get billingProjectId() {
    return this.getStringAttribute('billing_project_id');
  }
  public set billingProjectId(value: string) {
    this._billingProjectId = value;
  }
  public resetBillingProjectId() {
    this._billingProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectIdInput() {
    return this._billingProjectId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // endpoint_settings - computed: false, optional: true, required: false
  private _endpointSettings = new NetworkSecurityFirewallEndpointEndpointSettingsOutputReference(this, "endpoint_settings");
  public get endpointSettings() {
    return this._endpointSettings;
  }
  public putEndpointSettings(value: NetworkSecurityFirewallEndpointEndpointSettings) {
    this._endpointSettings.internalValue = value;
  }
  public resetEndpointSettings() {
    this._endpointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSettingsInput() {
    return this._endpointSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityFirewallEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityFirewallEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wildfire_settings - computed: false, optional: true, required: false
  private _wildfireSettings = new NetworkSecurityFirewallEndpointWildfireSettingsOutputReference(this, "wildfire_settings");
  public get wildfireSettings() {
    return this._wildfireSettings;
  }
  public putWildfireSettings(value: NetworkSecurityFirewallEndpointWildfireSettings) {
    this._wildfireSettings.internalValue = value;
  }
  public resetWildfireSettings() {
    this._wildfireSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireSettingsInput() {
    return this._wildfireSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_project_id: cdktn.stringToTerraform(this._billingProjectId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      parent: cdktn.stringToTerraform(this._parent),
      endpoint_settings: networkSecurityFirewallEndpointEndpointSettingsToTerraform(this._endpointSettings.internalValue),
      timeouts: networkSecurityFirewallEndpointTimeoutsToTerraform(this._timeouts.internalValue),
      wildfire_settings: networkSecurityFirewallEndpointWildfireSettingsToTerraform(this._wildfireSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_project_id: {
        value: cdktn.stringToHclTerraform(this._billingProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_settings: {
        value: networkSecurityFirewallEndpointEndpointSettingsToHclTerraform(this._endpointSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityFirewallEndpointEndpointSettingsList",
      },
      timeouts: {
        value: networkSecurityFirewallEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityFirewallEndpointTimeouts",
      },
      wildfire_settings: {
        value: networkSecurityFirewallEndpointWildfireSettingsToHclTerraform(this._wildfireSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityFirewallEndpointWildfireSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
