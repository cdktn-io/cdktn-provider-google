# `networkConnectivityTransport` Submodule <a name="`networkConnectivityTransport` Submodule" id="@cdktn/provider-google.networkConnectivityTransport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityTransport <a name="NetworkConnectivityTransport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport google_network_connectivity_transport}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransport(
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
  region: str,
  remote_profile: str,
  advertised_routes: typing.List[str] = None,
  bandwidth: str = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mtu_limit: typing.Union[int, float] = None,
  network: str = None,
  project: str = None,
  provided_activation_key: str = None,
  remote_account_id: str = None,
  stack_type: str = None,
  timeouts: NetworkConnectivityTransportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteProfile">remote_profile</a></code> | <code>str</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.advertisedRoutes">advertised_routes</a></code> | <code>typing.List[str]</code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>str</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.mtuLimit">mtu_limit</a></code> | <code>typing.Union[int, float]</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.network">network</a></code> | <code>str</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.providedActivationKey">provided_activation_key</a></code> | <code>str</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteAccountId">remote_account_id</a></code> | <code>str</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.stackType">stack_type</a></code> | <code>str</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#name NetworkConnectivityTransport#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.region"></a>

- *Type:* str

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#region NetworkConnectivityTransport#region}

---

##### `remote_profile`<sup>Required</sup> <a name="remote_profile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteProfile"></a>

- *Type:* str

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#remote_profile NetworkConnectivityTransport#remote_profile}

---

##### `advertised_routes`<sup>Optional</sup> <a name="advertised_routes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.advertisedRoutes"></a>

- *Type:* typing.List[str]

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#advertised_routes NetworkConnectivityTransport#advertised_routes}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.bandwidth"></a>

- *Type:* str

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#bandwidth NetworkConnectivityTransport#bandwidth}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#deletion_policy NetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#description NetworkConnectivityTransport#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#labels NetworkConnectivityTransport#labels}

---

##### `mtu_limit`<sup>Optional</sup> <a name="mtu_limit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.mtuLimit"></a>

- *Type:* typing.Union[int, float]

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#mtu_limit NetworkConnectivityTransport#mtu_limit}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.network"></a>

- *Type:* str

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#network NetworkConnectivityTransport#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}.

---

##### `provided_activation_key`<sup>Optional</sup> <a name="provided_activation_key" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.providedActivationKey"></a>

- *Type:* str

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#provided_activation_key NetworkConnectivityTransport#provided_activation_key}

---

##### `remote_account_id`<sup>Optional</sup> <a name="remote_account_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.remoteAccountId"></a>

- *Type:* str

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#remote_account_id NetworkConnectivityTransport#remote_account_id}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.stackType"></a>

- *Type:* str

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#stack_type NetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#timeouts NetworkConnectivityTransport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes">reset_advertised_routes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth">reset_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit">reset_mtu_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey">reset_provided_activation_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId">reset_remote_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}.

---

##### `reset_advertised_routes` <a name="reset_advertised_routes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes"></a>

```python
def reset_advertised_routes() -> None
```

##### `reset_bandwidth` <a name="reset_bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth"></a>

```python
def reset_bandwidth() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mtu_limit` <a name="reset_mtu_limit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit"></a>

```python
def reset_mtu_limit() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provided_activation_key` <a name="reset_provided_activation_key" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey"></a>

```python
def reset_provided_activation_key() -> None
```

##### `reset_remote_account_id` <a name="reset_remote_account_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId"></a>

```python
def reset_remote_account_id() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkConnectivityTransport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkConnectivityTransport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityTransport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey">generated_activation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork">peering_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput">advertised_routes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput">bandwidth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput">mtu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput">provided_activation_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput">remote_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput">remote_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes">advertised_routes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth">bandwidth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit">mtu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey">provided_activation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId">remote_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile">remote_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `generated_activation_key`<sup>Required</sup> <a name="generated_activation_key" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey"></a>

```python
generated_activation_key: str
```

- *Type:* str

---

##### `peering_network`<sup>Required</sup> <a name="peering_network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork"></a>

```python
peering_network: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts"></a>

```python
timeouts: NetworkConnectivityTransportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a>

---

##### `advertised_routes_input`<sup>Optional</sup> <a name="advertised_routes_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput"></a>

```python
advertised_routes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput"></a>

```python
bandwidth_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mtu_limit_input`<sup>Optional</sup> <a name="mtu_limit_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput"></a>

```python
mtu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provided_activation_key_input`<sup>Optional</sup> <a name="provided_activation_key_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput"></a>

```python
provided_activation_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `remote_account_id_input`<sup>Optional</sup> <a name="remote_account_id_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput"></a>

```python
remote_account_id_input: str
```

- *Type:* str

---

##### `remote_profile_input`<sup>Optional</sup> <a name="remote_profile_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput"></a>

```python
remote_profile_input: str
```

- *Type:* str

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkConnectivityTransportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---

##### `advertised_routes`<sup>Required</sup> <a name="advertised_routes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes"></a>

```python
advertised_routes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth"></a>

```python
bandwidth: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mtu_limit`<sup>Required</sup> <a name="mtu_limit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit"></a>

```python
mtu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provided_activation_key`<sup>Required</sup> <a name="provided_activation_key" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey"></a>

```python
provided_activation_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `remote_account_id`<sup>Required</sup> <a name="remote_account_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId"></a>

```python
remote_account_id: str
```

- *Type:* str

---

##### `remote_profile`<sup>Required</sup> <a name="remote_profile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile"></a>

```python
remote_profile: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityTransportConfig <a name="NetworkConnectivityTransportConfig" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  region: str,
  remote_profile: str,
  advertised_routes: typing.List[str] = None,
  bandwidth: str = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mtu_limit: typing.Union[int, float] = None,
  network: str = None,
  project: str = None,
  provided_activation_key: str = None,
  remote_account_id: str = None,
  stack_type: str = None,
  timeouts: NetworkConnectivityTransportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name">name</a></code> | <code>str</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region">region</a></code> | <code>str</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile">remote_profile</a></code> | <code>str</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes">advertised_routes</a></code> | <code>typing.List[str]</code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth">bandwidth</a></code> | <code>str</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit">mtu_limit</a></code> | <code>typing.Union[int, float]</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network">network</a></code> | <code>str</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey">provided_activation_key</a></code> | <code>str</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId">remote_account_id</a></code> | <code>str</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType">stack_type</a></code> | <code>str</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#name NetworkConnectivityTransport#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#region NetworkConnectivityTransport#region}

---

##### `remote_profile`<sup>Required</sup> <a name="remote_profile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile"></a>

```python
remote_profile: str
```

- *Type:* str

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#remote_profile NetworkConnectivityTransport#remote_profile}

---

##### `advertised_routes`<sup>Optional</sup> <a name="advertised_routes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes"></a>

```python
advertised_routes: typing.List[str]
```

- *Type:* typing.List[str]

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#advertised_routes NetworkConnectivityTransport#advertised_routes}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth"></a>

```python
bandwidth: str
```

- *Type:* str

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#bandwidth NetworkConnectivityTransport#bandwidth}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#deletion_policy NetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#description NetworkConnectivityTransport#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#labels NetworkConnectivityTransport#labels}

---

##### `mtu_limit`<sup>Optional</sup> <a name="mtu_limit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit"></a>

```python
mtu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#mtu_limit NetworkConnectivityTransport#mtu_limit}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#network NetworkConnectivityTransport#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}.

---

##### `provided_activation_key`<sup>Optional</sup> <a name="provided_activation_key" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey"></a>

```python
provided_activation_key: str
```

- *Type:* str

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#provided_activation_key NetworkConnectivityTransport#provided_activation_key}

---

##### `remote_account_id`<sup>Optional</sup> <a name="remote_account_id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId"></a>

```python
remote_account_id: str
```

- *Type:* str

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#remote_account_id NetworkConnectivityTransport#remote_account_id}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#stack_type NetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityTransportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#timeouts NetworkConnectivityTransport#timeouts}

---

### NetworkConnectivityTransportTimeouts <a name="NetworkConnectivityTransportTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityTransportTimeoutsOutputReference <a name="NetworkConnectivityTransportTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_transport

networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkConnectivityTransportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---



