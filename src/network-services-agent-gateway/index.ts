/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesAgentGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#deletion_policy NetworkServicesAgentGateway#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#description NetworkServicesAgentGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the AgentGateway resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#labels NetworkServicesAgentGateway#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the agent gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#location NetworkServicesAgentGateway#location}
  */
  readonly location: string;
  /**
  * Name of the AgentGateway resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#name NetworkServicesAgentGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}
  */
  readonly project?: string;
  /**
  * List of protocols supported by an Agent Gateway. Possible values: ["MCP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#protocols NetworkServicesAgentGateway#protocols}
  */
  readonly protocols?: string[];
  /**
  * A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.
  * Note: Currently limited to project-scoped registries Must be of format
  * '//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#registries NetworkServicesAgentGateway#registries}
  */
  readonly registries?: string[];
  /**
  * google_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#google_managed NetworkServicesAgentGateway#google_managed}
  */
  readonly googleManaged?: NetworkServicesAgentGatewayGoogleManaged;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#network_config NetworkServicesAgentGateway#network_config}
  */
  readonly networkConfig?: NetworkServicesAgentGatewayNetworkConfig;
  /**
  * self_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#self_managed NetworkServicesAgentGateway#self_managed}
  */
  readonly selfManaged?: NetworkServicesAgentGatewaySelfManaged;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#timeouts NetworkServicesAgentGateway#timeouts}
  */
  readonly timeouts?: NetworkServicesAgentGatewayTimeouts;
}
export interface NetworkServicesAgentGatewayAgentGatewayCard {
}

export function networkServicesAgentGatewayAgentGatewayCardToTerraform(struct?: NetworkServicesAgentGatewayAgentGatewayCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function networkServicesAgentGatewayAgentGatewayCardToHclTerraform(struct?: NetworkServicesAgentGatewayAgentGatewayCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkServicesAgentGatewayAgentGatewayCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkServicesAgentGatewayAgentGatewayCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentGatewayAgentGatewayCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mtls_endpoint - computed: true, optional: false, required: false
  public get mtlsEndpoint() {
    return this.getStringAttribute('mtls_endpoint');
  }

  // root_certificates - computed: true, optional: false, required: false
  public get rootCertificates() {
    return this.getListAttribute('root_certificates');
  }

  // service_extensions_service_account - computed: true, optional: false, required: false
  public get serviceExtensionsServiceAccount() {
    return this.getStringAttribute('service_extensions_service_account');
  }
}

export class NetworkServicesAgentGatewayAgentGatewayCardList extends cdktn.ComplexList {

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
  public get(index: number): NetworkServicesAgentGatewayAgentGatewayCardOutputReference {
    return new NetworkServicesAgentGatewayAgentGatewayCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesAgentGatewayGoogleManaged {
  /**
  * Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#governed_access_path NetworkServicesAgentGateway#governed_access_path}
  */
  readonly governedAccessPath: string;
}

export function networkServicesAgentGatewayGoogleManagedToTerraform(struct?: NetworkServicesAgentGatewayGoogleManagedOutputReference | NetworkServicesAgentGatewayGoogleManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    governed_access_path: cdktn.stringToTerraform(struct!.governedAccessPath),
  }
}


export function networkServicesAgentGatewayGoogleManagedToHclTerraform(struct?: NetworkServicesAgentGatewayGoogleManagedOutputReference | NetworkServicesAgentGatewayGoogleManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    governed_access_path: {
      value: cdktn.stringToHclTerraform(struct!.governedAccessPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentGatewayGoogleManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentGatewayGoogleManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._governedAccessPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.governedAccessPath = this._governedAccessPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentGatewayGoogleManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._governedAccessPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._governedAccessPath = value.governedAccessPath;
    }
  }

  // governed_access_path - computed: false, optional: false, required: true
  private _governedAccessPath?: string; 
  public get governedAccessPath() {
    return this.getStringAttribute('governed_access_path');
  }
  public set governedAccessPath(value: string) {
    this._governedAccessPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get governedAccessPathInput() {
    return this._governedAccessPath;
  }
}
export interface NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig {
  /**
  * The list of domain names to peer for DNS resolution. Each entry
  * must be a fully qualified domain name ending with a dot
  * (for example, 'example.com.').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#domains NetworkServicesAgentGateway#domains}
  */
  readonly domains: string[];
  /**
  * The URI of the target VPC network for DNS peering. Must be of the
  * form 'projects/{project}/global/networks/{network}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#target_network NetworkServicesAgentGateway#target_network}
  */
  readonly targetNetwork: string;
  /**
  * The ID of the project that hosts the target VPC network for DNS
  * peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#target_project NetworkServicesAgentGateway#target_project}
  */
  readonly targetProject: string;
}

export function networkServicesAgentGatewayNetworkConfigDnsPeeringConfigToTerraform(struct?: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference | NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domains),
    target_network: cdktn.stringToTerraform(struct!.targetNetwork),
    target_project: cdktn.stringToTerraform(struct!.targetProject),
  }
}


export function networkServicesAgentGatewayNetworkConfigDnsPeeringConfigToHclTerraform(struct?: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference | NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_network: {
      value: cdktn.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktn.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}
export interface NetworkServicesAgentGatewayNetworkConfigEgress {
  /**
  * The URI of the Network Attachment resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#network_attachment NetworkServicesAgentGateway#network_attachment}
  */
  readonly networkAttachment: string;
}

export function networkServicesAgentGatewayNetworkConfigEgressToTerraform(struct?: NetworkServicesAgentGatewayNetworkConfigEgressOutputReference | NetworkServicesAgentGatewayNetworkConfigEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
  }
}


export function networkServicesAgentGatewayNetworkConfigEgressToHclTerraform(struct?: NetworkServicesAgentGatewayNetworkConfigEgressOutputReference | NetworkServicesAgentGatewayNetworkConfigEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentGatewayNetworkConfigEgressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentGatewayNetworkConfigEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentGatewayNetworkConfigEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
    }
  }

  // network_attachment - computed: false, optional: false, required: true
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }
}
export interface NetworkServicesAgentGatewayNetworkConfig {
  /**
  * dns_peering_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#dns_peering_config NetworkServicesAgentGateway#dns_peering_config}
  */
  readonly dnsPeeringConfig?: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#egress NetworkServicesAgentGateway#egress}
  */
  readonly egress: NetworkServicesAgentGatewayNetworkConfigEgress;
}

export function networkServicesAgentGatewayNetworkConfigToTerraform(struct?: NetworkServicesAgentGatewayNetworkConfigOutputReference | NetworkServicesAgentGatewayNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dns_peering_config: networkServicesAgentGatewayNetworkConfigDnsPeeringConfigToTerraform(struct!.dnsPeeringConfig),
    egress: networkServicesAgentGatewayNetworkConfigEgressToTerraform(struct!.egress),
  }
}


export function networkServicesAgentGatewayNetworkConfigToHclTerraform(struct?: NetworkServicesAgentGatewayNetworkConfigOutputReference | NetworkServicesAgentGatewayNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dns_peering_config: {
      value: networkServicesAgentGatewayNetworkConfigDnsPeeringConfigToHclTerraform(struct!.dnsPeeringConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigList",
    },
    egress: {
      value: networkServicesAgentGatewayNetworkConfigEgressToHclTerraform(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesAgentGatewayNetworkConfigEgressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentGatewayNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentGatewayNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPeeringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfig = this._dnsPeeringConfig?.internalValue;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentGatewayNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsPeeringConfig.internalValue = undefined;
      this._egress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsPeeringConfig.internalValue = value.dnsPeeringConfig;
      this._egress.internalValue = value.egress;
    }
  }

  // dns_peering_config - computed: false, optional: true, required: false
  private _dnsPeeringConfig = new NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference(this, "dns_peering_config");
  public get dnsPeeringConfig() {
    return this._dnsPeeringConfig;
  }
  public putDnsPeeringConfig(value: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig) {
    this._dnsPeeringConfig.internalValue = value;
  }
  public resetDnsPeeringConfig() {
    this._dnsPeeringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigInput() {
    return this._dnsPeeringConfig.internalValue;
  }

  // egress - computed: false, optional: false, required: true
  private _egress = new NetworkServicesAgentGatewayNetworkConfigEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: NetworkServicesAgentGatewayNetworkConfigEgress) {
    this._egress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }
}
export interface NetworkServicesAgentGatewaySelfManaged {
  /**
  * A supported Google Cloud networking proxy in the Project and Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#resource_uri NetworkServicesAgentGateway#resource_uri}
  */
  readonly resourceUri: string;
}

export function networkServicesAgentGatewaySelfManagedToTerraform(struct?: NetworkServicesAgentGatewaySelfManagedOutputReference | NetworkServicesAgentGatewaySelfManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_uri: cdktn.stringToTerraform(struct!.resourceUri),
  }
}


export function networkServicesAgentGatewaySelfManagedToHclTerraform(struct?: NetworkServicesAgentGatewaySelfManagedOutputReference | NetworkServicesAgentGatewaySelfManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.resourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentGatewaySelfManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentGatewaySelfManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUri = this._resourceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentGatewaySelfManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceUri = value.resourceUri;
    }
  }

  // resource_uri - computed: false, optional: false, required: true
  private _resourceUri?: string; 
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUriInput() {
    return this._resourceUri;
  }
}
export interface NetworkServicesAgentGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#create NetworkServicesAgentGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#delete NetworkServicesAgentGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#update NetworkServicesAgentGateway#update}
  */
  readonly update?: string;
}

export function networkServicesAgentGatewayTimeoutsToTerraform(struct?: NetworkServicesAgentGatewayTimeouts | cdktn.IResolvable): any {
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


export function networkServicesAgentGatewayTimeoutsToHclTerraform(struct?: NetworkServicesAgentGatewayTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesAgentGatewayTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesAgentGatewayTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesAgentGatewayTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway google_network_services_agent_gateway}
*/
export class NetworkServicesAgentGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_agent_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesAgentGateway to import
  * @param importFromId The id of the existing NetworkServicesAgentGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesAgentGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_agent_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/network_services_agent_gateway google_network_services_agent_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesAgentGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesAgentGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_agent_gateway',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
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
    this._project = config.project;
    this._protocols = config.protocols;
    this._registries = config.registries;
    this._googleManaged.internalValue = config.googleManaged;
    this._networkConfig.internalValue = config.networkConfig;
    this._selfManaged.internalValue = config.selfManaged;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_gateway_card - computed: true, optional: false, required: false
  private _agentGatewayCard = new NetworkServicesAgentGatewayAgentGatewayCardList(this, "agent_gateway_card", false);
  public get agentGatewayCard() {
    return this._agentGatewayCard;
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

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // registries - computed: false, optional: true, required: false
  private _registries?: string[]; 
  public get registries() {
    return this.getListAttribute('registries');
  }
  public set registries(value: string[]) {
    this._registries = value;
  }
  public resetRegistries() {
    this._registries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries;
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

  // google_managed - computed: false, optional: true, required: false
  private _googleManaged = new NetworkServicesAgentGatewayGoogleManagedOutputReference(this, "google_managed");
  public get googleManaged() {
    return this._googleManaged;
  }
  public putGoogleManaged(value: NetworkServicesAgentGatewayGoogleManaged) {
    this._googleManaged.internalValue = value;
  }
  public resetGoogleManaged() {
    this._googleManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleManagedInput() {
    return this._googleManaged.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new NetworkServicesAgentGatewayNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: NetworkServicesAgentGatewayNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // self_managed - computed: false, optional: true, required: false
  private _selfManaged = new NetworkServicesAgentGatewaySelfManagedOutputReference(this, "self_managed");
  public get selfManaged() {
    return this._selfManaged;
  }
  public putSelfManaged(value: NetworkServicesAgentGatewaySelfManaged) {
    this._selfManaged.internalValue = value;
  }
  public resetSelfManaged() {
    this._selfManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesAgentGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesAgentGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      project: cdktn.stringToTerraform(this._project),
      protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(this._protocols),
      registries: cdktn.listMapper(cdktn.stringToTerraform, false)(this._registries),
      google_managed: networkServicesAgentGatewayGoogleManagedToTerraform(this._googleManaged.internalValue),
      network_config: networkServicesAgentGatewayNetworkConfigToTerraform(this._networkConfig.internalValue),
      self_managed: networkServicesAgentGatewaySelfManagedToTerraform(this._selfManaged.internalValue),
      timeouts: networkServicesAgentGatewayTimeoutsToTerraform(this._timeouts.internalValue),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      registries: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._registries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      google_managed: {
        value: networkServicesAgentGatewayGoogleManagedToHclTerraform(this._googleManaged.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesAgentGatewayGoogleManagedList",
      },
      network_config: {
        value: networkServicesAgentGatewayNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesAgentGatewayNetworkConfigList",
      },
      self_managed: {
        value: networkServicesAgentGatewaySelfManagedToHclTerraform(this._selfManaged.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesAgentGatewaySelfManagedList",
      },
      timeouts: {
        value: networkServicesAgentGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesAgentGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
