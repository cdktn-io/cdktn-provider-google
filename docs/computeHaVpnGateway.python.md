# `computeHaVpnGateway` Submodule <a name="`computeHaVpnGateway` Submodule" id="@cdktn/provider-google.computeHaVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeHaVpnGateway <a name="ComputeHaVpnGateway" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway google_compute_ha_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  network: str,
  deletion_policy: str = None,
  description: str = None,
  gateway_ip_version: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  params: ComputeHaVpnGatewayParams = None,
  project: str = None,
  region: str = None,
  stack_type: str = None,
  timeouts: ComputeHaVpnGatewayTimeouts = None,
  vpn_interfaces: IResolvable | typing.List[ComputeHaVpnGatewayVpnInterfaces] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.network">network</a></code> | <code>str</code> | The network this VPN gateway is accepting traffic for. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.gatewayIpVersion">gateway_ip_version</a></code> | <code>str</code> | The IP family of the gateway IPs for the HA-VPN gateway interfaces. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#project ComputeHaVpnGateway#project}. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.region">region</a></code> | <code>str</code> | The region this gateway should sit in. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.stackType">stack_type</a></code> | <code>str</code> | The stack type for this VPN gateway to identify the IP protocols that are enabled. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.vpnInterfaces">vpn_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]</code> | vpn_interfaces block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#name ComputeHaVpnGateway#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.network"></a>

- *Type:* str

The network this VPN gateway is accepting traffic for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#network ComputeHaVpnGateway#network}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#deletion_policy ComputeHaVpnGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#description ComputeHaVpnGateway#description}

---

##### `gateway_ip_version`<sup>Optional</sup> <a name="gateway_ip_version" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.gatewayIpVersion"></a>

- *Type:* str

The IP family of the gateway IPs for the HA-VPN gateway interfaces.

If not specified, IPV4 will be used. Default value: "IPV4" Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#gateway_ip_version ComputeHaVpnGateway#gateway_ip_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this resource.

These can only be added or modified by the setLabels method.
Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#labels ComputeHaVpnGateway#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#params ComputeHaVpnGateway#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#project ComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.region"></a>

- *Type:* str

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#region ComputeHaVpnGateway#region}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.stackType"></a>

- *Type:* str

The stack type for this VPN gateway to identify the IP protocols that are enabled.

If not specified, IPV4_ONLY will be used. Default value: "IPV4_ONLY" Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#stack_type ComputeHaVpnGateway#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#timeouts ComputeHaVpnGateway#timeouts}

---

##### `vpn_interfaces`<sup>Optional</sup> <a name="vpn_interfaces" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.Initializer.parameter.vpnInterfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]

vpn_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#vpn_interfaces ComputeHaVpnGateway#vpn_interfaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putParams">put_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putVpnInterfaces">put_vpn_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetGatewayIpVersion">reset_gateway_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetVpnInterfaces">reset_vpn_interfaces</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_params` <a name="put_params" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putParams"></a>

```python
def put_params(
  resource_manager_tags: typing.Mapping[str] = None
) -> None
```

###### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putParams.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the HaVpnGateway.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#resource_manager_tags ComputeHaVpnGateway#resource_manager_tags}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#create ComputeHaVpnGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#delete ComputeHaVpnGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#update ComputeHaVpnGateway#update}.

---

##### `put_vpn_interfaces` <a name="put_vpn_interfaces" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putVpnInterfaces"></a>

```python
def put_vpn_interfaces(
  value: IResolvable | typing.List[ComputeHaVpnGatewayVpnInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.putVpnInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateway_ip_version` <a name="reset_gateway_ip_version" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetGatewayIpVersion"></a>

```python
def reset_gateway_ip_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_interfaces` <a name="reset_vpn_interfaces" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.resetVpnInterfaces"></a>

```python
def reset_vpn_interfaces() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeHaVpnGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isConstruct"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeHaVpnGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeHaVpnGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeHaVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeHaVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference">ComputeHaVpnGatewayParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference">ComputeHaVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.vpnInterfaces">vpn_interfaces</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList">ComputeHaVpnGatewayVpnInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.gatewayIpVersionInput">gateway_ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.paramsInput">params_input</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.vpnInterfacesInput">vpn_interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.gatewayIpVersion">gateway_ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.params"></a>

```python
params: ComputeHaVpnGatewayParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference">ComputeHaVpnGatewayParamsOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.timeouts"></a>

```python
timeouts: ComputeHaVpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference">ComputeHaVpnGatewayTimeoutsOutputReference</a>

---

##### `vpn_interfaces`<sup>Required</sup> <a name="vpn_interfaces" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.vpnInterfaces"></a>

```python
vpn_interfaces: ComputeHaVpnGatewayVpnInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList">ComputeHaVpnGatewayVpnInterfacesList</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_ip_version_input`<sup>Optional</sup> <a name="gateway_ip_version_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.gatewayIpVersionInput"></a>

```python
gateway_ip_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.paramsInput"></a>

```python
params_input: ComputeHaVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeHaVpnGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a>

---

##### `vpn_interfaces_input`<sup>Optional</sup> <a name="vpn_interfaces_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.vpnInterfacesInput"></a>

```python
vpn_interfaces_input: IResolvable | typing.List[ComputeHaVpnGatewayVpnInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateway_ip_version`<sup>Required</sup> <a name="gateway_ip_version" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.gatewayIpVersion"></a>

```python
gateway_ip_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeHaVpnGatewayConfig <a name="ComputeHaVpnGatewayConfig" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  network: str,
  deletion_policy: str = None,
  description: str = None,
  gateway_ip_version: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  params: ComputeHaVpnGatewayParams = None,
  project: str = None,
  region: str = None,
  stack_type: str = None,
  timeouts: ComputeHaVpnGatewayTimeouts = None,
  vpn_interfaces: IResolvable | typing.List[ComputeHaVpnGatewayVpnInterfaces] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.network">network</a></code> | <code>str</code> | The network this VPN gateway is accepting traffic for. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.gatewayIpVersion">gateway_ip_version</a></code> | <code>str</code> | The IP family of the gateway IPs for the HA-VPN gateway interfaces. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#project ComputeHaVpnGateway#project}. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.region">region</a></code> | <code>str</code> | The region this gateway should sit in. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.stackType">stack_type</a></code> | <code>str</code> | The stack type for this VPN gateway to identify the IP protocols that are enabled. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.vpnInterfaces">vpn_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]</code> | vpn_interfaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#name ComputeHaVpnGateway#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network this VPN gateway is accepting traffic for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#network ComputeHaVpnGateway#network}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#deletion_policy ComputeHaVpnGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#description ComputeHaVpnGateway#description}

---

##### `gateway_ip_version`<sup>Optional</sup> <a name="gateway_ip_version" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.gatewayIpVersion"></a>

```python
gateway_ip_version: str
```

- *Type:* str

The IP family of the gateway IPs for the HA-VPN gateway interfaces.

If not specified, IPV4 will be used. Default value: "IPV4" Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#gateway_ip_version ComputeHaVpnGateway#gateway_ip_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this resource.

These can only be added or modified by the setLabels method.
Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#labels ComputeHaVpnGateway#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.params"></a>

```python
params: ComputeHaVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#params ComputeHaVpnGateway#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#project ComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#region ComputeHaVpnGateway#region}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

The stack type for this VPN gateway to identify the IP protocols that are enabled.

If not specified, IPV4_ONLY will be used. Default value: "IPV4_ONLY" Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#stack_type ComputeHaVpnGateway#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.timeouts"></a>

```python
timeouts: ComputeHaVpnGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#timeouts ComputeHaVpnGateway#timeouts}

---

##### `vpn_interfaces`<sup>Optional</sup> <a name="vpn_interfaces" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayConfig.property.vpnInterfaces"></a>

```python
vpn_interfaces: IResolvable | typing.List[ComputeHaVpnGatewayVpnInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]

vpn_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#vpn_interfaces ComputeHaVpnGateway#vpn_interfaces}

---

### ComputeHaVpnGatewayParams <a name="ComputeHaVpnGatewayParams" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayParams(
  resource_manager_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags to be bound to the HaVpnGateway. |

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the HaVpnGateway.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#resource_manager_tags ComputeHaVpnGateway#resource_manager_tags}

---

### ComputeHaVpnGatewayTimeouts <a name="ComputeHaVpnGatewayTimeouts" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#create ComputeHaVpnGateway#create}. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#delete ComputeHaVpnGateway#delete}. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#update ComputeHaVpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#create ComputeHaVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#delete ComputeHaVpnGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#update ComputeHaVpnGateway#update}.

---

### ComputeHaVpnGatewayVpnInterfaces <a name="ComputeHaVpnGatewayVpnInterfaces" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces(
  id: typing.Union[int, float] = None,
  interconnect_attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The numeric ID of this VPN gateway interface. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces.property.interconnectAttachment">interconnect_attachment</a></code> | <code>str</code> | URL of the interconnect attachment resource. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The numeric ID of this VPN gateway interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#id ComputeHaVpnGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect_attachment`<sup>Optional</sup> <a name="interconnect_attachment" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces.property.interconnectAttachment"></a>

```python
interconnect_attachment: str
```

- *Type:* str

URL of the interconnect attachment resource.

When the value
of this field is present, the VPN Gateway will be used for
IPsec-encrypted Cloud Interconnect; all Egress or Ingress
traffic for this VPN Gateway interface will go through the
specified interconnect attachment resource.

Not currently available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_ha_vpn_gateway#interconnect_attachment ComputeHaVpnGateway#interconnect_attachment}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeHaVpnGatewayParamsOutputReference <a name="ComputeHaVpnGatewayParamsOutputReference" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParamsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHaVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayParams">ComputeHaVpnGatewayParams</a>

---


### ComputeHaVpnGatewayTimeoutsOutputReference <a name="ComputeHaVpnGatewayTimeoutsOutputReference" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeHaVpnGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayTimeouts">ComputeHaVpnGatewayTimeouts</a>

---


### ComputeHaVpnGatewayVpnInterfacesList <a name="ComputeHaVpnGatewayVpnInterfacesList" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeHaVpnGatewayVpnInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeHaVpnGatewayVpnInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>]

---


### ComputeHaVpnGatewayVpnInterfacesOutputReference <a name="ComputeHaVpnGatewayVpnInterfacesOutputReference" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_ha_vpn_gateway

computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resetInterconnectAttachment">reset_interconnect_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnect_attachment` <a name="reset_interconnect_attachment" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.resetInterconnectAttachment"></a>

```python
def reset_interconnect_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachmentInput">interconnect_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment">interconnect_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interconnect_attachment_input`<sup>Optional</sup> <a name="interconnect_attachment_input" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachmentInput"></a>

```python
interconnect_attachment_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interconnect_attachment`<sup>Required</sup> <a name="interconnect_attachment" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment"></a>

```python
interconnect_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeHaVpnGatewayVpnInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeHaVpnGateway.ComputeHaVpnGatewayVpnInterfaces">ComputeHaVpnGatewayVpnInterfaces</a>

---



