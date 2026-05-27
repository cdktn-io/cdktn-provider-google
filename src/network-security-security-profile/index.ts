/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkSecuritySecurityProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#deletion_policy NetworkSecuritySecurityProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of the security profile. The Max length is 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the security profile.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}
  */
  readonly location?: string;
  /**
  * The name of the security profile resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}
  */
  readonly name: string;
  /**
  * The name of the parent this security profile belongs to.
  * Format: 'organizations/{organization_id}' or 'projects/{project_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}
  */
  readonly parent?: string;
  /**
  * The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}
  */
  readonly type: string;
  /**
  * custom_intercept_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#custom_intercept_profile NetworkSecuritySecurityProfile#custom_intercept_profile}
  */
  readonly customInterceptProfile?: NetworkSecuritySecurityProfileCustomInterceptProfile;
  /**
  * custom_mirroring_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#custom_mirroring_profile NetworkSecuritySecurityProfile#custom_mirroring_profile}
  */
  readonly customMirroringProfile?: NetworkSecuritySecurityProfileCustomMirroringProfile;
  /**
  * threat_prevention_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}
  */
  readonly threatPreventionProfile?: NetworkSecuritySecurityProfileThreatPreventionProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}
  */
  readonly timeouts?: NetworkSecuritySecurityProfileTimeouts;
  /**
  * url_filtering_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#url_filtering_profile NetworkSecuritySecurityProfile#url_filtering_profile}
  */
  readonly urlFilteringProfile?: NetworkSecuritySecurityProfileUrlFilteringProfile;
}
export interface NetworkSecuritySecurityProfileCustomInterceptProfile {
  /**
  * The Intercept Endpoint Group to which matching traffic should be intercepted.
  * Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#intercept_endpoint_group NetworkSecuritySecurityProfile#intercept_endpoint_group}
  */
  readonly interceptEndpointGroup: string;
}

export function networkSecuritySecurityProfileCustomInterceptProfileToTerraform(struct?: NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference | NetworkSecuritySecurityProfileCustomInterceptProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intercept_endpoint_group: cdktn.stringToTerraform(struct!.interceptEndpointGroup),
  }
}


export function networkSecuritySecurityProfileCustomInterceptProfileToHclTerraform(struct?: NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference | NetworkSecuritySecurityProfileCustomInterceptProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intercept_endpoint_group: {
      value: cdktn.stringToHclTerraform(struct!.interceptEndpointGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecuritySecurityProfileCustomInterceptProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptEndpointGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptEndpointGroup = this._interceptEndpointGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileCustomInterceptProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptEndpointGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptEndpointGroup = value.interceptEndpointGroup;
    }
  }

  // intercept_endpoint_group - computed: false, optional: false, required: true
  private _interceptEndpointGroup?: string; 
  public get interceptEndpointGroup() {
    return this.getStringAttribute('intercept_endpoint_group');
  }
  public set interceptEndpointGroup(value: string) {
    this._interceptEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptEndpointGroupInput() {
    return this._interceptEndpointGroup;
  }
}
export interface NetworkSecuritySecurityProfileCustomMirroringProfile {
  /**
  * The target downstream Mirroring Deployment Groups.
  * This field is used for Packet Broker mirroring endpoint groups to specify
  * the deployment groups that the packet should be mirrored to by the broker.
  * Format: projects/{project_id}/locations/global/mirroringDeploymentGroups/{deployment_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#mirroring_deployment_groups NetworkSecuritySecurityProfile#mirroring_deployment_groups}
  */
  readonly mirroringDeploymentGroups?: string[];
  /**
  * The target Mirroring Endpoint Group.
  * When a mirroring rule with this security profile attached matches a packet,
  * a replica will be mirrored to the location-local target in this group.
  * Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#mirroring_endpoint_group NetworkSecuritySecurityProfile#mirroring_endpoint_group}
  */
  readonly mirroringEndpointGroup: string;
}

export function networkSecuritySecurityProfileCustomMirroringProfileToTerraform(struct?: NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference | NetworkSecuritySecurityProfileCustomMirroringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirroring_deployment_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mirroringDeploymentGroups),
    mirroring_endpoint_group: cdktn.stringToTerraform(struct!.mirroringEndpointGroup),
  }
}


export function networkSecuritySecurityProfileCustomMirroringProfileToHclTerraform(struct?: NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference | NetworkSecuritySecurityProfileCustomMirroringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirroring_deployment_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mirroringDeploymentGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mirroring_endpoint_group: {
      value: cdktn.stringToHclTerraform(struct!.mirroringEndpointGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecuritySecurityProfileCustomMirroringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirroringDeploymentGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringDeploymentGroups = this._mirroringDeploymentGroups;
    }
    if (this._mirroringEndpointGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringEndpointGroup = this._mirroringEndpointGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileCustomMirroringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mirroringDeploymentGroups = undefined;
      this._mirroringEndpointGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mirroringDeploymentGroups = value.mirroringDeploymentGroups;
      this._mirroringEndpointGroup = value.mirroringEndpointGroup;
    }
  }

  // mirroring_deployment_groups - computed: false, optional: true, required: false
  private _mirroringDeploymentGroups?: string[]; 
  public get mirroringDeploymentGroups() {
    return this.getListAttribute('mirroring_deployment_groups');
  }
  public set mirroringDeploymentGroups(value: string[]) {
    this._mirroringDeploymentGroups = value;
  }
  public resetMirroringDeploymentGroups() {
    this._mirroringDeploymentGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringDeploymentGroupsInput() {
    return this._mirroringDeploymentGroups;
  }

  // mirroring_endpoint_group - computed: false, optional: false, required: true
  private _mirroringEndpointGroup?: string; 
  public get mirroringEndpointGroup() {
    return this.getStringAttribute('mirroring_endpoint_group');
  }
  public set mirroringEndpointGroup(value: string) {
    this._mirroringEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringEndpointGroupInput() {
    return this._mirroringEndpointGroup;
  }

  // mirroring_endpoint_group_type - computed: true, optional: false, required: false
  public get mirroringEndpointGroupType() {
    return this.getStringAttribute('mirroring_endpoint_group_type');
  }
}
export interface NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides {
  /**
  * Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#protocol NetworkSecuritySecurityProfile#protocol}
  */
  readonly protocol: string;
}

export function networkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function networkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToHclTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference {
    return new NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides {
  /**
  * Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#severity NetworkSecuritySecurityProfile#severity}
  */
  readonly severity: string;
}

export function networkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    severity: cdktn.stringToTerraform(struct!.severity),
  }
}


export function networkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToHclTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._severity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._severity = value.severity;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference {
    return new NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides {
  /**
  * Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}
  */
  readonly action: string;
  /**
  * Vendor-specific ID of a threat to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#threat_id NetworkSecuritySecurityProfile#threat_id}
  */
  readonly threatId: string;
}

export function networkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    threat_id: cdktn.stringToTerraform(struct!.threatId),
  }
}


export function networkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToHclTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_id: {
      value: cdktn.stringToHclTerraform(struct!.threatId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threatId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatId = this._threatId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threatId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threatId = value.threatId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // threat_id - computed: false, optional: false, required: true
  private _threatId?: string; 
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
  public set threatId(value: string) {
    this._threatId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIdInput() {
    return this._threatId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference {
    return new NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecuritySecurityProfileThreatPreventionProfile {
  /**
  * antivirus_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#antivirus_overrides NetworkSecuritySecurityProfile#antivirus_overrides}
  */
  readonly antivirusOverrides?: NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktn.IResolvable;
  /**
  * severity_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#severity_overrides NetworkSecuritySecurityProfile#severity_overrides}
  */
  readonly severityOverrides?: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktn.IResolvable;
  /**
  * threat_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#threat_overrides NetworkSecuritySecurityProfile#threat_overrides}
  */
  readonly threatOverrides?: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktn.IResolvable;
}

export function networkSecuritySecurityProfileThreatPreventionProfileToTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference | NetworkSecuritySecurityProfileThreatPreventionProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    antivirus_overrides: cdktn.listMapper(networkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToTerraform, true)(struct!.antivirusOverrides),
    severity_overrides: cdktn.listMapper(networkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToTerraform, true)(struct!.severityOverrides),
    threat_overrides: cdktn.listMapper(networkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToTerraform, true)(struct!.threatOverrides),
  }
}


export function networkSecuritySecurityProfileThreatPreventionProfileToHclTerraform(struct?: NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference | NetworkSecuritySecurityProfileThreatPreventionProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    antivirus_overrides: {
      value: cdktn.listMapperHcl(networkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesToHclTerraform, true)(struct!.antivirusOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList",
    },
    severity_overrides: {
      value: cdktn.listMapperHcl(networkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesToHclTerraform, true)(struct!.severityOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList",
    },
    threat_overrides: {
      value: cdktn.listMapperHcl(networkSecuritySecurityProfileThreatPreventionProfileThreatOverridesToHclTerraform, true)(struct!.threatOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecuritySecurityProfileThreatPreventionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antivirusOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirusOverrides = this._antivirusOverrides?.internalValue;
    }
    if (this._severityOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityOverrides = this._severityOverrides?.internalValue;
    }
    if (this._threatOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatOverrides = this._threatOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileThreatPreventionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antivirusOverrides.internalValue = undefined;
      this._severityOverrides.internalValue = undefined;
      this._threatOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antivirusOverrides.internalValue = value.antivirusOverrides;
      this._severityOverrides.internalValue = value.severityOverrides;
      this._threatOverrides.internalValue = value.threatOverrides;
    }
  }

  // antivirus_overrides - computed: false, optional: true, required: false
  private _antivirusOverrides = new NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(this, "antivirus_overrides", true);
  public get antivirusOverrides() {
    return this._antivirusOverrides;
  }
  public putAntivirusOverrides(value: NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[] | cdktn.IResolvable) {
    this._antivirusOverrides.internalValue = value;
  }
  public resetAntivirusOverrides() {
    this._antivirusOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusOverridesInput() {
    return this._antivirusOverrides.internalValue;
  }

  // severity_overrides - computed: false, optional: true, required: false
  private _severityOverrides = new NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(this, "severity_overrides", true);
  public get severityOverrides() {
    return this._severityOverrides;
  }
  public putSeverityOverrides(value: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[] | cdktn.IResolvable) {
    this._severityOverrides.internalValue = value;
  }
  public resetSeverityOverrides() {
    this._severityOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityOverridesInput() {
    return this._severityOverrides.internalValue;
  }

  // threat_overrides - computed: false, optional: true, required: false
  private _threatOverrides = new NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(this, "threat_overrides", true);
  public get threatOverrides() {
    return this._threatOverrides;
  }
  public putThreatOverrides(value: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[] | cdktn.IResolvable) {
    this._threatOverrides.internalValue = value;
  }
  public resetThreatOverrides() {
    this._threatOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatOverridesInput() {
    return this._threatOverrides.internalValue;
  }
}
export interface NetworkSecuritySecurityProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}
  */
  readonly update?: string;
}

export function networkSecuritySecurityProfileTimeoutsToTerraform(struct?: NetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function networkSecuritySecurityProfileTimeoutsToHclTerraform(struct?: NetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class NetworkSecuritySecurityProfileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecuritySecurityProfileTimeouts | cdktn.IResolvable | undefined) {
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
export interface NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters {
  /**
  * The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#filtering_action NetworkSecuritySecurityProfile#filtering_action}
  */
  readonly filteringAction: string;
  /**
  * The priority of the filter within the URL filtering profile.
  * Must be an integer from 0 and 2147483647, inclusive. Lower integers indicate higher priorities.
  * The priority of a filter must be unique within a URL filtering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#priority NetworkSecuritySecurityProfile#priority}
  */
  readonly priority: number;
  /**
  * A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable.
  * A domain name must match with at least one of the strings in the list for a filter to be applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#urls NetworkSecuritySecurityProfile#urls}
  */
  readonly urls?: string[];
}

export function networkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToTerraform(struct?: NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filtering_action: cdktn.stringToTerraform(struct!.filteringAction),
    priority: cdktn.numberToTerraform(struct!.priority),
    urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.urls),
  }
}


export function networkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToHclTerraform(struct?: NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filtering_action: {
      value: cdktn.stringToHclTerraform(struct!.filteringAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.urls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filteringAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringAction = this._filteringAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filteringAction = undefined;
      this._priority = undefined;
      this._urls = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filteringAction = value.filteringAction;
      this._priority = value.priority;
      this._urls = value.urls;
    }
  }

  // filtering_action - computed: false, optional: false, required: true
  private _filteringAction?: string; 
  public get filteringAction() {
    return this.getStringAttribute('filtering_action');
  }
  public set filteringAction(value: string) {
    this._filteringAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringActionInput() {
    return this._filteringAction;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}

export class NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList extends cdktn.ComplexList {
  public internalValue? : NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference {
    return new NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecuritySecurityProfileUrlFilteringProfile {
  /**
  * url_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#url_filters NetworkSecuritySecurityProfile#url_filters}
  */
  readonly urlFilters?: NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[] | cdktn.IResolvable;
}

export function networkSecuritySecurityProfileUrlFilteringProfileToTerraform(struct?: NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference | NetworkSecuritySecurityProfileUrlFilteringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_filters: cdktn.listMapper(networkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToTerraform, true)(struct!.urlFilters),
  }
}


export function networkSecuritySecurityProfileUrlFilteringProfileToHclTerraform(struct?: NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference | NetworkSecuritySecurityProfileUrlFilteringProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_filters: {
      value: cdktn.listMapperHcl(networkSecuritySecurityProfileUrlFilteringProfileUrlFiltersToHclTerraform, true)(struct!.urlFilters),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecuritySecurityProfileUrlFilteringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilters = this._urlFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecuritySecurityProfileUrlFilteringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urlFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urlFilters.internalValue = value.urlFilters;
    }
  }

  // url_filters - computed: false, optional: true, required: false
  private _urlFilters = new NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList(this, "url_filters", true);
  public get urlFilters() {
    return this._urlFilters;
  }
  public putUrlFilters(value: NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[] | cdktn.IResolvable) {
    this._urlFilters.internalValue = value;
  }
  public resetUrlFilters() {
    this._urlFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFiltersInput() {
    return this._urlFilters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile google_network_security_security_profile}
*/
export class NetworkSecuritySecurityProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecuritySecurityProfile to import
  * @param importFromId The id of the existing NetworkSecuritySecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecuritySecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/network_security_security_profile google_network_security_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecuritySecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecuritySecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._parent = config.parent;
    this._type = config.type;
    this._customInterceptProfile.internalValue = config.customInterceptProfile;
    this._customMirroringProfile.internalValue = config.customMirroringProfile;
    this._threatPreventionProfile.internalValue = config.threatPreventionProfile;
    this._timeouts.internalValue = config.timeouts;
    this._urlFilteringProfile.internalValue = config.urlFilteringProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_intercept_profile - computed: false, optional: true, required: false
  private _customInterceptProfile = new NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(this, "custom_intercept_profile");
  public get customInterceptProfile() {
    return this._customInterceptProfile;
  }
  public putCustomInterceptProfile(value: NetworkSecuritySecurityProfileCustomInterceptProfile) {
    this._customInterceptProfile.internalValue = value;
  }
  public resetCustomInterceptProfile() {
    this._customInterceptProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInterceptProfileInput() {
    return this._customInterceptProfile.internalValue;
  }

  // custom_mirroring_profile - computed: false, optional: true, required: false
  private _customMirroringProfile = new NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(this, "custom_mirroring_profile");
  public get customMirroringProfile() {
    return this._customMirroringProfile;
  }
  public putCustomMirroringProfile(value: NetworkSecuritySecurityProfileCustomMirroringProfile) {
    this._customMirroringProfile.internalValue = value;
  }
  public resetCustomMirroringProfile() {
    this._customMirroringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMirroringProfileInput() {
    return this._customMirroringProfile.internalValue;
  }

  // threat_prevention_profile - computed: false, optional: true, required: false
  private _threatPreventionProfile = new NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(this, "threat_prevention_profile");
  public get threatPreventionProfile() {
    return this._threatPreventionProfile;
  }
  public putThreatPreventionProfile(value: NetworkSecuritySecurityProfileThreatPreventionProfile) {
    this._threatPreventionProfile.internalValue = value;
  }
  public resetThreatPreventionProfile() {
    this._threatPreventionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionProfileInput() {
    return this._threatPreventionProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecuritySecurityProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecuritySecurityProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // url_filtering_profile - computed: false, optional: true, required: false
  private _urlFilteringProfile = new NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference(this, "url_filtering_profile");
  public get urlFilteringProfile() {
    return this._urlFilteringProfile;
  }
  public putUrlFilteringProfile(value: NetworkSecuritySecurityProfileUrlFilteringProfile) {
    this._urlFilteringProfile.internalValue = value;
  }
  public resetUrlFilteringProfile() {
    this._urlFilteringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringProfileInput() {
    return this._urlFilteringProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      parent: cdktn.stringToTerraform(this._parent),
      type: cdktn.stringToTerraform(this._type),
      custom_intercept_profile: networkSecuritySecurityProfileCustomInterceptProfileToTerraform(this._customInterceptProfile.internalValue),
      custom_mirroring_profile: networkSecuritySecurityProfileCustomMirroringProfileToTerraform(this._customMirroringProfile.internalValue),
      threat_prevention_profile: networkSecuritySecurityProfileThreatPreventionProfileToTerraform(this._threatPreventionProfile.internalValue),
      timeouts: networkSecuritySecurityProfileTimeoutsToTerraform(this._timeouts.internalValue),
      url_filtering_profile: networkSecuritySecurityProfileUrlFilteringProfileToTerraform(this._urlFilteringProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_intercept_profile: {
        value: networkSecuritySecurityProfileCustomInterceptProfileToHclTerraform(this._customInterceptProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecuritySecurityProfileCustomInterceptProfileList",
      },
      custom_mirroring_profile: {
        value: networkSecuritySecurityProfileCustomMirroringProfileToHclTerraform(this._customMirroringProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecuritySecurityProfileCustomMirroringProfileList",
      },
      threat_prevention_profile: {
        value: networkSecuritySecurityProfileThreatPreventionProfileToHclTerraform(this._threatPreventionProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecuritySecurityProfileThreatPreventionProfileList",
      },
      timeouts: {
        value: networkSecuritySecurityProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecuritySecurityProfileTimeouts",
      },
      url_filtering_profile: {
        value: networkSecuritySecurityProfileUrlFilteringProfileToHclTerraform(this._urlFilteringProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecuritySecurityProfileUrlFilteringProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
