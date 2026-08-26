/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeVpnTunnelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#deletion_policy ComputeVpnTunnel#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IKE protocol version to use when establishing the VPN tunnel with
  * peer VPN gateway.
  * Acceptable IKE versions are 1 or 2. Default version is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}
  */
  readonly ikeVersion?: number;
  /**
  * Labels to apply to this VpnTunnel.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Local traffic selector to use when establishing the VPN tunnel with
  * peer VPN gateway. The value should be a CIDR formatted string,
  * for example '192.168.0.0/16'. The ranges should be disjoint.
  * Only IPv4 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}
  */
  readonly localTrafficSelector?: string[];
  /**
  * Name of the resource. The name must be 1-63 characters long, and
  * comply with RFC1035. Specifically, the name must be 1-63
  * characters long and match the regular expression
  * '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
  * must be a lowercase letter, and all following characters must
  * be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}
  */
  readonly name: string;
  /**
  * URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}
  */
  readonly peerExternalGateway?: string;
  /**
  * The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}
  */
  readonly peerExternalGatewayInterface?: number;
  /**
  * URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
  * If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
  * ID in the peer GCP VPN gateway.
  * This field must reference a 'google_compute_ha_vpn_gateway' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}
  */
  readonly peerGcpGateway?: string;
  /**
  * IP address of the peer VPN gateway. Only IPv4 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}
  */
  readonly project?: string;
  /**
  * The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}
  */
  readonly region?: string;
  /**
  * Remote traffic selector to use when establishing the VPN tunnel with
  * peer VPN gateway. The value should be a CIDR formatted string,
  * for example '192.168.0.0/16'. The ranges should be disjoint.
  * Only IPv4 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}
  */
  readonly remoteTrafficSelector?: string[];
  /**
  * URL of router resource to be used for dynamic routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}
  */
  readonly router?: string;
  /**
  * Shared secret used to set the secure session between the Cloud VPN
  * gateway and the peer VPN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}
  */
  readonly sharedSecret?: string;
  /**
  * Shared secret used to set the secure session between the Cloud VPN
  * gateway and the peer VPN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#shared_secret_wo ComputeVpnTunnel#shared_secret_wo}
  */
  readonly sharedSecretWo?: string;
  /**
  * Triggers update of 'shared_secret_wo' write-only. Increment this value when an update to 'shared_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#shared_secret_wo_version ComputeVpnTunnel#shared_secret_wo_version}
  */
  readonly sharedSecretWoVersion?: string;
  /**
  * URL of the Target VPN gateway with which this VPN tunnel is
  * associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}
  */
  readonly targetVpnGateway?: string;
  /**
  * URL of the VPN gateway with which this VPN tunnel is associated.
  * This must be used if a High Availability VPN gateway resource is created.
  * This field must reference a 'google_compute_ha_vpn_gateway' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}
  */
  readonly vpnGateway?: string;
  /**
  * The interface ID of the VPN gateway with which this VPN tunnel is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}
  */
  readonly vpnGatewayInterface?: number;
  /**
  * cipher_suite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#cipher_suite ComputeVpnTunnel#cipher_suite}
  */
  readonly cipherSuite?: ComputeVpnTunnelCipherSuite;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#params ComputeVpnTunnel#params}
  */
  readonly params?: ComputeVpnTunnelParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}
  */
  readonly timeouts?: ComputeVpnTunnelTimeouts;
}
export interface ComputeVpnTunnelCipherSuitePhase1 {
  /**
  * Diffie-Hellman groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#dh ComputeVpnTunnel#dh}
  */
  readonly dh?: string[];
  /**
  * Encryption algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}
  */
  readonly encryption?: string[];
  /**
  * Integrity algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}
  */
  readonly integrity?: string[];
  /**
  * Pseudo-random functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#prf ComputeVpnTunnel#prf}
  */
  readonly prf?: string[];
}

export function computeVpnTunnelCipherSuitePhase1ToTerraform(struct?: ComputeVpnTunnelCipherSuitePhase1OutputReference | ComputeVpnTunnelCipherSuitePhase1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dh: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dh),
    encryption: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.encryption),
    integrity: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.integrity),
    prf: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.prf),
  }
}


export function computeVpnTunnelCipherSuitePhase1ToHclTerraform(struct?: ComputeVpnTunnelCipherSuitePhase1OutputReference | ComputeVpnTunnelCipherSuitePhase1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dh: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dh),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encryption: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.encryption),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    integrity: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.integrity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prf: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.prf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeVpnTunnelCipherSuitePhase1OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeVpnTunnelCipherSuitePhase1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dh !== undefined) {
      hasAnyValues = true;
      internalValueResult.dh = this._dh;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._integrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrity = this._integrity;
    }
    if (this._prf !== undefined) {
      hasAnyValues = true;
      internalValueResult.prf = this._prf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnTunnelCipherSuitePhase1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dh = undefined;
      this._encryption = undefined;
      this._integrity = undefined;
      this._prf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dh = value.dh;
      this._encryption = value.encryption;
      this._integrity = value.integrity;
      this._prf = value.prf;
    }
  }

  // dh - computed: false, optional: true, required: false
  private _dh?: string[]; 
  public get dh() {
    return this.getListAttribute('dh');
  }
  public set dh(value: string[]) {
    this._dh = value;
  }
  public resetDh() {
    this._dh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhInput() {
    return this._dh;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string[]; 
  public get encryption() {
    return this.getListAttribute('encryption');
  }
  public set encryption(value: string[]) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // integrity - computed: false, optional: true, required: false
  private _integrity?: string[]; 
  public get integrity() {
    return this.getListAttribute('integrity');
  }
  public set integrity(value: string[]) {
    this._integrity = value;
  }
  public resetIntegrity() {
    this._integrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityInput() {
    return this._integrity;
  }

  // prf - computed: false, optional: true, required: false
  private _prf?: string[]; 
  public get prf() {
    return this.getListAttribute('prf');
  }
  public set prf(value: string[]) {
    this._prf = value;
  }
  public resetPrf() {
    this._prf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfInput() {
    return this._prf;
  }
}
export interface ComputeVpnTunnelCipherSuitePhase2 {
  /**
  * Encryption algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#encryption ComputeVpnTunnel#encryption}
  */
  readonly encryption?: string[];
  /**
  * Integrity algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#integrity ComputeVpnTunnel#integrity}
  */
  readonly integrity?: string[];
  /**
  * Perfect forward secrecy groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#pfs ComputeVpnTunnel#pfs}
  */
  readonly pfs?: string[];
}

export function computeVpnTunnelCipherSuitePhase2ToTerraform(struct?: ComputeVpnTunnelCipherSuitePhase2OutputReference | ComputeVpnTunnelCipherSuitePhase2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.encryption),
    integrity: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.integrity),
    pfs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pfs),
  }
}


export function computeVpnTunnelCipherSuitePhase2ToHclTerraform(struct?: ComputeVpnTunnelCipherSuitePhase2OutputReference | ComputeVpnTunnelCipherSuitePhase2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.encryption),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    integrity: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.integrity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pfs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pfs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeVpnTunnelCipherSuitePhase2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeVpnTunnelCipherSuitePhase2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._integrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrity = this._integrity;
    }
    if (this._pfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfs = this._pfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnTunnelCipherSuitePhase2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryption = undefined;
      this._integrity = undefined;
      this._pfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryption = value.encryption;
      this._integrity = value.integrity;
      this._pfs = value.pfs;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string[]; 
  public get encryption() {
    return this.getListAttribute('encryption');
  }
  public set encryption(value: string[]) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // integrity - computed: false, optional: true, required: false
  private _integrity?: string[]; 
  public get integrity() {
    return this.getListAttribute('integrity');
  }
  public set integrity(value: string[]) {
    this._integrity = value;
  }
  public resetIntegrity() {
    this._integrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityInput() {
    return this._integrity;
  }

  // pfs - computed: false, optional: true, required: false
  private _pfs?: string[]; 
  public get pfs() {
    return this.getListAttribute('pfs');
  }
  public set pfs(value: string[]) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs;
  }
}
export interface ComputeVpnTunnelCipherSuite {
  /**
  * phase1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#phase1 ComputeVpnTunnel#phase1}
  */
  readonly phase1?: ComputeVpnTunnelCipherSuitePhase1;
  /**
  * phase2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#phase2 ComputeVpnTunnel#phase2}
  */
  readonly phase2?: ComputeVpnTunnelCipherSuitePhase2;
}

export function computeVpnTunnelCipherSuiteToTerraform(struct?: ComputeVpnTunnelCipherSuiteOutputReference | ComputeVpnTunnelCipherSuite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    phase1: computeVpnTunnelCipherSuitePhase1ToTerraform(struct!.phase1),
    phase2: computeVpnTunnelCipherSuitePhase2ToTerraform(struct!.phase2),
  }
}


export function computeVpnTunnelCipherSuiteToHclTerraform(struct?: ComputeVpnTunnelCipherSuiteOutputReference | ComputeVpnTunnelCipherSuite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    phase1: {
      value: computeVpnTunnelCipherSuitePhase1ToHclTerraform(struct!.phase1),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeVpnTunnelCipherSuitePhase1List",
    },
    phase2: {
      value: computeVpnTunnelCipherSuitePhase2ToHclTerraform(struct!.phase2),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeVpnTunnelCipherSuitePhase2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeVpnTunnelCipherSuiteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeVpnTunnelCipherSuite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phase1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase1 = this._phase1?.internalValue;
    }
    if (this._phase2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase2 = this._phase2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnTunnelCipherSuite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phase1.internalValue = undefined;
      this._phase2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phase1.internalValue = value.phase1;
      this._phase2.internalValue = value.phase2;
    }
  }

  // phase1 - computed: false, optional: true, required: false
  private _phase1 = new ComputeVpnTunnelCipherSuitePhase1OutputReference(this, "phase1");
  public get phase1() {
    return this._phase1;
  }
  public putPhase1(value: ComputeVpnTunnelCipherSuitePhase1) {
    this._phase1.internalValue = value;
  }
  public resetPhase1() {
    this._phase1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1Input() {
    return this._phase1.internalValue;
  }

  // phase2 - computed: false, optional: true, required: false
  private _phase2 = new ComputeVpnTunnelCipherSuitePhase2OutputReference(this, "phase2");
  public get phase2() {
    return this._phase2;
  }
  public putPhase2(value: ComputeVpnTunnelCipherSuitePhase2) {
    this._phase2.internalValue = value;
  }
  public resetPhase2() {
    this._phase2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2Input() {
    return this._phase2.internalValue;
  }
}
export interface ComputeVpnTunnelParams {
  /**
  * Resource manager tags to be bound to the Vpn Tunnel. Tag keys and values have the
  * same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
  * and values are in the format tagValues/456.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#resource_manager_tags ComputeVpnTunnel#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function computeVpnTunnelParamsToTerraform(struct?: ComputeVpnTunnelParamsOutputReference | ComputeVpnTunnelParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function computeVpnTunnelParamsToHclTerraform(struct?: ComputeVpnTunnelParamsOutputReference | ComputeVpnTunnelParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeVpnTunnelParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeVpnTunnelParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnTunnelParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }
}
export interface ComputeVpnTunnelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}
  */
  readonly update?: string;
}

export function computeVpnTunnelTimeoutsToTerraform(struct?: ComputeVpnTunnelTimeouts | cdktn.IResolvable): any {
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


export function computeVpnTunnelTimeoutsToHclTerraform(struct?: ComputeVpnTunnelTimeouts | cdktn.IResolvable): any {
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

export class ComputeVpnTunnelTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeVpnTunnelTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeVpnTunnelTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}
*/
export class ComputeVpnTunnel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_vpn_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeVpnTunnel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeVpnTunnel to import
  * @param importFromId The id of the existing ComputeVpnTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeVpnTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_vpn_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeVpnTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeVpnTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_vpn_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._ikeVersion = config.ikeVersion;
    this._labels = config.labels;
    this._localTrafficSelector = config.localTrafficSelector;
    this._name = config.name;
    this._peerExternalGateway = config.peerExternalGateway;
    this._peerExternalGatewayInterface = config.peerExternalGatewayInterface;
    this._peerGcpGateway = config.peerGcpGateway;
    this._peerIp = config.peerIp;
    this._project = config.project;
    this._region = config.region;
    this._remoteTrafficSelector = config.remoteTrafficSelector;
    this._router = config.router;
    this._sharedSecret = config.sharedSecret;
    this._sharedSecretWo = config.sharedSecretWo;
    this._sharedSecretWoVersion = config.sharedSecretWoVersion;
    this._targetVpnGateway = config.targetVpnGateway;
    this._vpnGateway = config.vpnGateway;
    this._vpnGatewayInterface = config.vpnGatewayInterface;
    this._cipherSuite.internalValue = config.cipherSuite;
    this._params.internalValue = config.params;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // detailed_status - computed: true, optional: false, required: false
  public get detailedStatus() {
    return this.getStringAttribute('detailed_status');
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

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: number; 
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }
  public set ikeVersion(value: number) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // local_traffic_selector - computed: true, optional: true, required: false
  private _localTrafficSelector?: string[]; 
  public get localTrafficSelector() {
    return cdktn.Fn.tolist(this.getListAttribute('local_traffic_selector'));
  }
  public set localTrafficSelector(value: string[]) {
    this._localTrafficSelector = value;
  }
  public resetLocalTrafficSelector() {
    this._localTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTrafficSelectorInput() {
    return this._localTrafficSelector;
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

  // peer_external_gateway - computed: false, optional: true, required: false
  private _peerExternalGateway?: string; 
  public get peerExternalGateway() {
    return this.getStringAttribute('peer_external_gateway');
  }
  public set peerExternalGateway(value: string) {
    this._peerExternalGateway = value;
  }
  public resetPeerExternalGateway() {
    this._peerExternalGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerExternalGatewayInput() {
    return this._peerExternalGateway;
  }

  // peer_external_gateway_interface - computed: false, optional: true, required: false
  private _peerExternalGatewayInterface?: number; 
  public get peerExternalGatewayInterface() {
    return this.getNumberAttribute('peer_external_gateway_interface');
  }
  public set peerExternalGatewayInterface(value: number) {
    this._peerExternalGatewayInterface = value;
  }
  public resetPeerExternalGatewayInterface() {
    this._peerExternalGatewayInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerExternalGatewayInterfaceInput() {
    return this._peerExternalGatewayInterface;
  }

  // peer_gcp_gateway - computed: false, optional: true, required: false
  private _peerGcpGateway?: string; 
  public get peerGcpGateway() {
    return this.getStringAttribute('peer_gcp_gateway');
  }
  public set peerGcpGateway(value: string) {
    this._peerGcpGateway = value;
  }
  public resetPeerGcpGateway() {
    this._peerGcpGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGcpGatewayInput() {
    return this._peerGcpGateway;
  }

  // peer_ip - computed: true, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remote_traffic_selector - computed: true, optional: true, required: false
  private _remoteTrafficSelector?: string[]; 
  public get remoteTrafficSelector() {
    return cdktn.Fn.tolist(this.getListAttribute('remote_traffic_selector'));
  }
  public set remoteTrafficSelector(value: string[]) {
    this._remoteTrafficSelector = value;
  }
  public resetRemoteTrafficSelector() {
    this._remoteTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTrafficSelectorInput() {
    return this._remoteTrafficSelector;
  }

  // router - computed: false, optional: true, required: false
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // shared_secret_hash - computed: true, optional: false, required: false
  public get sharedSecretHash() {
    return this.getStringAttribute('shared_secret_hash');
  }

  // shared_secret_wo - computed: false, optional: true, required: false
  private _sharedSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get sharedSecretWo() {
    return this.getStringAttribute('shared_secret_wo');
  }
  public set sharedSecretWo(value: string) {
    this._sharedSecretWo = value;
  }
  public resetSharedSecretWo() {
    this._sharedSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretWoInput() {
    return this._sharedSecretWo;
  }

  // shared_secret_wo_version - computed: false, optional: true, required: false
  private _sharedSecretWoVersion?: string; 
  public get sharedSecretWoVersion() {
    return this.getStringAttribute('shared_secret_wo_version');
  }
  public set sharedSecretWoVersion(value: string) {
    this._sharedSecretWoVersion = value;
  }
  public resetSharedSecretWoVersion() {
    this._sharedSecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretWoVersionInput() {
    return this._sharedSecretWoVersion;
  }

  // target_vpn_gateway - computed: false, optional: true, required: false
  private _targetVpnGateway?: string; 
  public get targetVpnGateway() {
    return this.getStringAttribute('target_vpn_gateway');
  }
  public set targetVpnGateway(value: string) {
    this._targetVpnGateway = value;
  }
  public resetTargetVpnGateway() {
    this._targetVpnGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnGatewayInput() {
    return this._targetVpnGateway;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // vpn_gateway - computed: false, optional: true, required: false
  private _vpnGateway?: string; 
  public get vpnGateway() {
    return this.getStringAttribute('vpn_gateway');
  }
  public set vpnGateway(value: string) {
    this._vpnGateway = value;
  }
  public resetVpnGateway() {
    this._vpnGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInput() {
    return this._vpnGateway;
  }

  // vpn_gateway_interface - computed: false, optional: true, required: false
  private _vpnGatewayInterface?: number; 
  public get vpnGatewayInterface() {
    return this.getNumberAttribute('vpn_gateway_interface');
  }
  public set vpnGatewayInterface(value: number) {
    this._vpnGatewayInterface = value;
  }
  public resetVpnGatewayInterface() {
    this._vpnGatewayInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInterfaceInput() {
    return this._vpnGatewayInterface;
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite = new ComputeVpnTunnelCipherSuiteOutputReference(this, "cipher_suite");
  public get cipherSuite() {
    return this._cipherSuite;
  }
  public putCipherSuite(value: ComputeVpnTunnelCipherSuite) {
    this._cipherSuite.internalValue = value;
  }
  public resetCipherSuite() {
    this._cipherSuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new ComputeVpnTunnelParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: ComputeVpnTunnelParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeVpnTunnelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeVpnTunnelTimeouts) {
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
      ike_version: cdktn.numberToTerraform(this._ikeVersion),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      local_traffic_selector: cdktn.listMapper(cdktn.stringToTerraform, false)(this._localTrafficSelector),
      name: cdktn.stringToTerraform(this._name),
      peer_external_gateway: cdktn.stringToTerraform(this._peerExternalGateway),
      peer_external_gateway_interface: cdktn.numberToTerraform(this._peerExternalGatewayInterface),
      peer_gcp_gateway: cdktn.stringToTerraform(this._peerGcpGateway),
      peer_ip: cdktn.stringToTerraform(this._peerIp),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      remote_traffic_selector: cdktn.listMapper(cdktn.stringToTerraform, false)(this._remoteTrafficSelector),
      router: cdktn.stringToTerraform(this._router),
      shared_secret: cdktn.stringToTerraform(this._sharedSecret),
      shared_secret_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._sharedSecretWo)),
      shared_secret_wo_version: cdktn.stringToTerraform(this._sharedSecretWoVersion),
      target_vpn_gateway: cdktn.stringToTerraform(this._targetVpnGateway),
      vpn_gateway: cdktn.stringToTerraform(this._vpnGateway),
      vpn_gateway_interface: cdktn.numberToTerraform(this._vpnGatewayInterface),
      cipher_suite: computeVpnTunnelCipherSuiteToTerraform(this._cipherSuite.internalValue),
      params: computeVpnTunnelParamsToTerraform(this._params.internalValue),
      timeouts: computeVpnTunnelTimeoutsToTerraform(this._timeouts.internalValue),
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
      ike_version: {
        value: cdktn.numberToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      local_traffic_selector: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._localTrafficSelector),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_external_gateway: {
        value: cdktn.stringToHclTerraform(this._peerExternalGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_external_gateway_interface: {
        value: cdktn.numberToHclTerraform(this._peerExternalGatewayInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_gcp_gateway: {
        value: cdktn.stringToHclTerraform(this._peerGcpGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ip: {
        value: cdktn.stringToHclTerraform(this._peerIp),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_traffic_selector: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._remoteTrafficSelector),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      router: {
        value: cdktn.stringToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret: {
        value: cdktn.stringToHclTerraform(this._sharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._sharedSecretWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret_wo_version: {
        value: cdktn.stringToHclTerraform(this._sharedSecretWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpn_gateway: {
        value: cdktn.stringToHclTerraform(this._targetVpnGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway: {
        value: cdktn.stringToHclTerraform(this._vpnGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_interface: {
        value: cdktn.numberToHclTerraform(this._vpnGatewayInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_suite: {
        value: computeVpnTunnelCipherSuiteToHclTerraform(this._cipherSuite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeVpnTunnelCipherSuiteList",
      },
      params: {
        value: computeVpnTunnelParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeVpnTunnelParamsList",
      },
      timeouts: {
        value: computeVpnTunnelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeVpnTunnelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
