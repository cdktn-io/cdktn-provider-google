/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesAgentConnectivityTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The path of the access.
  * The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}
  */
  readonly accessPath: string;
  /**
  * The types of network access provided to the gateway.
  * Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}
  */
  readonly accessTypes?: string[];
  /**
  * Short name of the AgentConnectivityTemplate resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}
  */
  readonly agentConnectivityTemplateId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the AgentConnectivityTemplate resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the AgentConnectivityTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}
  */
  readonly project?: string;
  /**
  * egress_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}
  */
  readonly egressNetworkConfig?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}
  */
  readonly timeouts?: NetworkServicesAgentConnectivityTemplateTimeouts;
}
export interface NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig {
  /**
  * The domain name to peer for DNS resolution. Must be a fully
  * qualified domain name ending with a dot (for example, 'example.com.').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#domain NetworkServicesAgentConnectivityTemplate#domain}
  */
  readonly domain?: string;
  /**
  * The list of domain names to peer for DNS resolution. Each entry
  * must be a fully qualified domain name ending with a dot
  * (for example, 'example.com.'). At least one domain must be
  * specified between 'domain' and 'domains'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#domains NetworkServicesAgentConnectivityTemplate#domains}
  */
  readonly domains?: string[];
  /**
  * The URI of the target VPC network for DNS peering. Must be of the
  * form 'projects/{project}/global/networks/{network}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#target_network NetworkServicesAgentConnectivityTemplate#target_network}
  */
  readonly targetNetwork: string;
}

export function networkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigToTerraform(struct?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference | NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domains),
    target_network: cdktn.stringToTerraform(struct!.targetNetwork),
  }
}


export function networkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigToHclTerraform(struct?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference | NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._domains = undefined;
      this._targetNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._domains = value.domains;
      this._targetNetwork = value.targetNetwork;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
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
}
export interface NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig {
  /**
  * Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#additional_roots NetworkServicesAgentConnectivityTemplate#additional_roots}
  */
  readonly additionalRoots: string;
  /**
  * The trust config resource name.
  * Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#trust_config NetworkServicesAgentConnectivityTemplate#trust_config}
  */
  readonly trustConfig?: string;
}

export function networkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigToTerraform(struct?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference | NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_roots: cdktn.stringToTerraform(struct!.additionalRoots),
    trust_config: cdktn.stringToTerraform(struct!.trustConfig),
  }
}


export function networkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigToHclTerraform(struct?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference | NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_roots: {
      value: cdktn.stringToHclTerraform(struct!.additionalRoots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_config: {
      value: cdktn.stringToHclTerraform(struct!.trustConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRoots !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRoots = this._additionalRoots;
    }
    if (this._trustConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustConfig = this._trustConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRoots = undefined;
      this._trustConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRoots = value.additionalRoots;
      this._trustConfig = value.trustConfig;
    }
  }

  // additional_roots - computed: false, optional: false, required: true
  private _additionalRoots?: string; 
  public get additionalRoots() {
    return this.getStringAttribute('additional_roots');
  }
  public set additionalRoots(value: string) {
    this._additionalRoots = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRootsInput() {
    return this._additionalRoots;
  }

  // trust_config - computed: false, optional: true, required: false
  private _trustConfig?: string; 
  public get trustConfig() {
    return this.getStringAttribute('trust_config');
  }
  public set trustConfig(value: string) {
    this._trustConfig = value;
  }
  public resetTrustConfig() {
    this._trustConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustConfigInput() {
    return this._trustConfig;
  }
}
export interface NetworkServicesAgentConnectivityTemplateEgressNetworkConfig {
  /**
  * The network attachment resource name.
  * Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#network_attachment NetworkServicesAgentConnectivityTemplate#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#vpc_egress NetworkServicesAgentConnectivityTemplate#vpc_egress}
  */
  readonly vpcEgress?: string;
  /**
  * dns_peering_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#dns_peering_config NetworkServicesAgentConnectivityTemplate#dns_peering_config}
  */
  readonly dnsPeeringConfig?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#tls_config NetworkServicesAgentConnectivityTemplate#tls_config}
  */
  readonly tlsConfig?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig;
}

export function networkServicesAgentConnectivityTemplateEgressNetworkConfigToTerraform(struct?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference | NetworkServicesAgentConnectivityTemplateEgressNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    vpc_egress: cdktn.stringToTerraform(struct!.vpcEgress),
    dns_peering_config: networkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigToTerraform(struct!.dnsPeeringConfig),
    tls_config: networkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function networkServicesAgentConnectivityTemplateEgressNetworkConfigToHclTerraform(struct?: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference | NetworkServicesAgentConnectivityTemplateEgressNetworkConfig): any {
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
    vpc_egress: {
      value: cdktn.stringToHclTerraform(struct!.vpcEgress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_peering_config: {
      value: networkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigToHclTerraform(struct!.dnsPeeringConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigList",
    },
    tls_config: {
      value: networkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesAgentConnectivityTemplateEgressNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._vpcEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEgress = this._vpcEgress;
    }
    if (this._dnsPeeringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfig = this._dnsPeeringConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._vpcEgress = undefined;
      this._dnsPeeringConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._vpcEgress = value.vpcEgress;
      this._dnsPeeringConfig.internalValue = value.dnsPeeringConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // vpc_egress - computed: false, optional: true, required: false
  private _vpcEgress?: string; 
  public get vpcEgress() {
    return this.getStringAttribute('vpc_egress');
  }
  public set vpcEgress(value: string) {
    this._vpcEgress = value;
  }
  public resetVpcEgress() {
    this._vpcEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEgressInput() {
    return this._vpcEgress;
  }

  // dns_peering_config - computed: false, optional: true, required: false
  private _dnsPeeringConfig = new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(this, "dns_peering_config");
  public get dnsPeeringConfig() {
    return this._dnsPeeringConfig;
  }
  public putDnsPeeringConfig(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig) {
    this._dnsPeeringConfig.internalValue = value;
  }
  public resetDnsPeeringConfig() {
    this._dnsPeeringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigInput() {
    return this._dnsPeeringConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface NetworkServicesAgentConnectivityTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}
  */
  readonly update?: string;
}

export function networkServicesAgentConnectivityTemplateTimeoutsToTerraform(struct?: NetworkServicesAgentConnectivityTemplateTimeouts | cdktn.IResolvable): any {
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


export function networkServicesAgentConnectivityTemplateTimeoutsToHclTerraform(struct?: NetworkServicesAgentConnectivityTemplateTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesAgentConnectivityTemplateTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesAgentConnectivityTemplateTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template google_network_services_agent_connectivity_template}
*/
export class NetworkServicesAgentConnectivityTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_agent_connectivity_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesAgentConnectivityTemplate to import
  * @param importFromId The id of the existing NetworkServicesAgentConnectivityTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesAgentConnectivityTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_agent_connectivity_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/network_services_agent_connectivity_template google_network_services_agent_connectivity_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesAgentConnectivityTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesAgentConnectivityTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_agent_connectivity_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.5.0',
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
    this._accessPath = config.accessPath;
    this._accessTypes = config.accessTypes;
    this._agentConnectivityTemplateId = config.agentConnectivityTemplateId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._egressNetworkConfig.internalValue = config.egressNetworkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_path - computed: false, optional: false, required: true
  private _accessPath?: string; 
  public get accessPath() {
    return this.getStringAttribute('access_path');
  }
  public set accessPath(value: string) {
    this._accessPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPathInput() {
    return this._accessPath;
  }

  // access_types - computed: true, optional: true, required: false
  private _accessTypes?: string[]; 
  public get accessTypes() {
    return this.getListAttribute('access_types');
  }
  public set accessTypes(value: string[]) {
    this._accessTypes = value;
  }
  public resetAccessTypes() {
    this._accessTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypesInput() {
    return this._accessTypes;
  }

  // agent_connectivity_template_id - computed: false, optional: false, required: true
  private _agentConnectivityTemplateId?: string; 
  public get agentConnectivityTemplateId() {
    return this.getStringAttribute('agent_connectivity_template_id');
  }
  public set agentConnectivityTemplateId(value: string) {
    this._agentConnectivityTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConnectivityTemplateIdInput() {
    return this._agentConnectivityTemplateId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // egress_network_config - computed: false, optional: true, required: false
  private _egressNetworkConfig = new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(this, "egress_network_config");
  public get egressNetworkConfig() {
    return this._egressNetworkConfig;
  }
  public putEgressNetworkConfig(value: NetworkServicesAgentConnectivityTemplateEgressNetworkConfig) {
    this._egressNetworkConfig.internalValue = value;
  }
  public resetEgressNetworkConfig() {
    this._egressNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkConfigInput() {
    return this._egressNetworkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesAgentConnectivityTemplateTimeouts) {
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
      access_path: cdktn.stringToTerraform(this._accessPath),
      access_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._accessTypes),
      agent_connectivity_template_id: cdktn.stringToTerraform(this._agentConnectivityTemplateId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      egress_network_config: networkServicesAgentConnectivityTemplateEgressNetworkConfigToTerraform(this._egressNetworkConfig.internalValue),
      timeouts: networkServicesAgentConnectivityTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_path: {
        value: cdktn.stringToHclTerraform(this._accessPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._accessTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      agent_connectivity_template_id: {
        value: cdktn.stringToHclTerraform(this._agentConnectivityTemplateId),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_network_config: {
        value: networkServicesAgentConnectivityTemplateEgressNetworkConfigToHclTerraform(this._egressNetworkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesAgentConnectivityTemplateEgressNetworkConfigList",
      },
      timeouts: {
        value: networkServicesAgentConnectivityTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesAgentConnectivityTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
