# `computeNetworkPeering` Submodule <a name="`computeNetworkPeering` Submodule" id="@cdktn/provider-google.computeNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkPeering <a name="ComputeNetworkPeering" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering google_compute_network_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeering(
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
  peer_network: str,
  deletion_policy: str = None,
  export_custom_routes: bool | IResolvable = None,
  export_subnet_routes_with_public_ip: bool | IResolvable = None,
  id: str = None,
  import_custom_routes: bool | IResolvable = None,
  import_subnet_routes_with_public_ip: bool | IResolvable = None,
  stack_type: str = None,
  timeouts: ComputeNetworkPeeringTimeouts = None,
  update_strategy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the peering. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.network">network</a></code> | <code>str</code> | The primary network of the peering. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.peerNetwork">peer_network</a></code> | <code>str</code> | The peer network in the peering. The peer network may belong to a different project. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.exportCustomRoutes">export_custom_routes</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to export the custom routes to the peer network. Defaults to false. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.exportSubnetRoutesWithPublicIp">export_subnet_routes_with_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#export_subnet_routes_with_public_ip ComputeNetworkPeering#export_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#id ComputeNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.importCustomRoutes">import_custom_routes</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to export the custom routes from the peer network. Defaults to false. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.importSubnetRoutesWithPublicIp">import_subnet_routes_with_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import_subnet_routes_with_public_ip ComputeNetworkPeering#import_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.stackType">stack_type</a></code> | <code>str</code> | Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.updateStrategy">update_strategy</a></code> | <code>str</code> | The update strategy determines the semantics for updates and deletes to the peering connection configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.name"></a>

- *Type:* str

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#name ComputeNetworkPeering#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.network"></a>

- *Type:* str

The primary network of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#network ComputeNetworkPeering#network}

---

##### `peer_network`<sup>Required</sup> <a name="peer_network" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.peerNetwork"></a>

- *Type:* str

The peer network in the peering. The peer network may belong to a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#peer_network ComputeNetworkPeering#peer_network}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#deletion_policy ComputeNetworkPeering#deletion_policy}

---

##### `export_custom_routes`<sup>Optional</sup> <a name="export_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* bool | cdktn.IResolvable

Whether to export the custom routes to the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#export_custom_routes ComputeNetworkPeering#export_custom_routes}

---

##### `export_subnet_routes_with_public_ip`<sup>Optional</sup> <a name="export_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.exportSubnetRoutesWithPublicIp"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#export_subnet_routes_with_public_ip ComputeNetworkPeering#export_subnet_routes_with_public_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#id ComputeNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_custom_routes`<sup>Optional</sup> <a name="import_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.importCustomRoutes"></a>

- *Type:* bool | cdktn.IResolvable

Whether to export the custom routes from the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import_custom_routes ComputeNetworkPeering#import_custom_routes}

---

##### `import_subnet_routes_with_public_ip`<sup>Optional</sup> <a name="import_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.importSubnetRoutesWithPublicIp"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import_subnet_routes_with_public_ip ComputeNetworkPeering#import_subnet_routes_with_public_ip}.

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.stackType"></a>

- *Type:* str

Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks.

The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#stack_type ComputeNetworkPeering#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#timeouts ComputeNetworkPeering#timeouts}

---

##### `update_strategy`<sup>Optional</sup> <a name="update_strategy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.Initializer.parameter.updateStrategy"></a>

- *Type:* str

The update strategy determines the semantics for updates and deletes to the peering connection configuration.

The default value is INDEPENDENT. Possible values: ["INDEPENDENT", "CONSENSUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#update_strategy ComputeNetworkPeering#update_strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetExportCustomRoutes">reset_export_custom_routes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetExportSubnetRoutesWithPublicIp">reset_export_subnet_routes_with_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetImportCustomRoutes">reset_import_custom_routes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetImportSubnetRoutesWithPublicIp">reset_import_subnet_routes_with_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetUpdateStrategy">reset_update_strategy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#create ComputeNetworkPeering#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#delete ComputeNetworkPeering#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#update ComputeNetworkPeering#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_export_custom_routes` <a name="reset_export_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetExportCustomRoutes"></a>

```python
def reset_export_custom_routes() -> None
```

##### `reset_export_subnet_routes_with_public_ip` <a name="reset_export_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetExportSubnetRoutesWithPublicIp"></a>

```python
def reset_export_subnet_routes_with_public_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_custom_routes` <a name="reset_import_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetImportCustomRoutes"></a>

```python
def reset_import_custom_routes() -> None
```

##### `reset_import_subnet_routes_with_public_ip` <a name="reset_import_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetImportSubnetRoutesWithPublicIp"></a>

```python
def reset_import_subnet_routes_with_public_ip() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_strategy` <a name="reset_update_strategy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.resetUpdateStrategy"></a>

```python
def reset_update_strategy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeNetworkPeering resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isConstruct"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeNetworkPeering resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNetworkPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference">ComputeNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportCustomRoutesInput">export_custom_routes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportSubnetRoutesWithPublicIpInput">export_subnet_routes_with_public_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importCustomRoutesInput">import_custom_routes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importSubnetRoutesWithPublicIpInput">import_subnet_routes_with_public_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.peerNetworkInput">peer_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.updateStrategyInput">update_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportCustomRoutes">export_custom_routes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp">export_subnet_routes_with_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importCustomRoutes">import_custom_routes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importSubnetRoutesWithPublicIp">import_subnet_routes_with_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.peerNetwork">peer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.updateStrategy">update_strategy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.timeouts"></a>

```python
timeouts: ComputeNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference">ComputeNetworkPeeringTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `export_custom_routes_input`<sup>Optional</sup> <a name="export_custom_routes_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportCustomRoutesInput"></a>

```python
export_custom_routes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `export_subnet_routes_with_public_ip_input`<sup>Optional</sup> <a name="export_subnet_routes_with_public_ip_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportSubnetRoutesWithPublicIpInput"></a>

```python
export_subnet_routes_with_public_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_custom_routes_input`<sup>Optional</sup> <a name="import_custom_routes_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importCustomRoutesInput"></a>

```python
import_custom_routes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `import_subnet_routes_with_public_ip_input`<sup>Optional</sup> <a name="import_subnet_routes_with_public_ip_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importSubnetRoutesWithPublicIpInput"></a>

```python
import_subnet_routes_with_public_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `peer_network_input`<sup>Optional</sup> <a name="peer_network_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.peerNetworkInput"></a>

```python
peer_network_input: str
```

- *Type:* str

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeNetworkPeeringTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a>

---

##### `update_strategy_input`<sup>Optional</sup> <a name="update_strategy_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.updateStrategyInput"></a>

```python
update_strategy_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `export_custom_routes`<sup>Required</sup> <a name="export_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportCustomRoutes"></a>

```python
export_custom_routes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `export_subnet_routes_with_public_ip`<sup>Required</sup> <a name="export_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp"></a>

```python
export_subnet_routes_with_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_custom_routes`<sup>Required</sup> <a name="import_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importCustomRoutes"></a>

```python
import_custom_routes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `import_subnet_routes_with_public_ip`<sup>Required</sup> <a name="import_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.importSubnetRoutesWithPublicIp"></a>

```python
import_subnet_routes_with_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `peer_network`<sup>Required</sup> <a name="peer_network" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.peerNetwork"></a>

```python
peer_network: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `update_strategy`<sup>Required</sup> <a name="update_strategy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.updateStrategy"></a>

```python
update_strategy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkPeeringConfig <a name="ComputeNetworkPeeringConfig" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeeringConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  network: str,
  peer_network: str,
  deletion_policy: str = None,
  export_custom_routes: bool | IResolvable = None,
  export_subnet_routes_with_public_ip: bool | IResolvable = None,
  id: str = None,
  import_custom_routes: bool | IResolvable = None,
  import_subnet_routes_with_public_ip: bool | IResolvable = None,
  stack_type: str = None,
  timeouts: ComputeNetworkPeeringTimeouts = None,
  update_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.name">name</a></code> | <code>str</code> | Name of the peering. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.network">network</a></code> | <code>str</code> | The primary network of the peering. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.peerNetwork">peer_network</a></code> | <code>str</code> | The peer network in the peering. The peer network may belong to a different project. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.exportCustomRoutes">export_custom_routes</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to export the custom routes to the peer network. Defaults to false. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.exportSubnetRoutesWithPublicIp">export_subnet_routes_with_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#export_subnet_routes_with_public_ip ComputeNetworkPeering#export_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#id ComputeNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.importCustomRoutes">import_custom_routes</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to export the custom routes from the peer network. Defaults to false. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.importSubnetRoutesWithPublicIp">import_subnet_routes_with_public_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import_subnet_routes_with_public_ip ComputeNetworkPeering#import_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.stackType">stack_type</a></code> | <code>str</code> | Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.updateStrategy">update_strategy</a></code> | <code>str</code> | The update strategy determines the semantics for updates and deletes to the peering connection configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#name ComputeNetworkPeering#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The primary network of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#network ComputeNetworkPeering#network}

---

##### `peer_network`<sup>Required</sup> <a name="peer_network" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.peerNetwork"></a>

```python
peer_network: str
```

- *Type:* str

The peer network in the peering. The peer network may belong to a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#peer_network ComputeNetworkPeering#peer_network}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#deletion_policy ComputeNetworkPeering#deletion_policy}

---

##### `export_custom_routes`<sup>Optional</sup> <a name="export_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.exportCustomRoutes"></a>

```python
export_custom_routes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to export the custom routes to the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#export_custom_routes ComputeNetworkPeering#export_custom_routes}

---

##### `export_subnet_routes_with_public_ip`<sup>Optional</sup> <a name="export_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.exportSubnetRoutesWithPublicIp"></a>

```python
export_subnet_routes_with_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#export_subnet_routes_with_public_ip ComputeNetworkPeering#export_subnet_routes_with_public_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#id ComputeNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_custom_routes`<sup>Optional</sup> <a name="import_custom_routes" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.importCustomRoutes"></a>

```python
import_custom_routes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to export the custom routes from the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import_custom_routes ComputeNetworkPeering#import_custom_routes}

---

##### `import_subnet_routes_with_public_ip`<sup>Optional</sup> <a name="import_subnet_routes_with_public_ip" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.importSubnetRoutesWithPublicIp"></a>

```python
import_subnet_routes_with_public_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#import_subnet_routes_with_public_ip ComputeNetworkPeering#import_subnet_routes_with_public_ip}.

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks.

The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#stack_type ComputeNetworkPeering#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#timeouts ComputeNetworkPeering#timeouts}

---

##### `update_strategy`<sup>Optional</sup> <a name="update_strategy" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringConfig.property.updateStrategy"></a>

```python
update_strategy: str
```

- *Type:* str

The update strategy determines the semantics for updates and deletes to the peering connection configuration.

The default value is INDEPENDENT. Possible values: ["INDEPENDENT", "CONSENSUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#update_strategy ComputeNetworkPeering#update_strategy}

---

### ComputeNetworkPeeringTimeouts <a name="ComputeNetworkPeeringTimeouts" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeeringTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#create ComputeNetworkPeering#create}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#delete ComputeNetworkPeering#delete}. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#update ComputeNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#create ComputeNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#delete ComputeNetworkPeering#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_network_peering#update ComputeNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkPeeringTimeoutsOutputReference <a name="ComputeNetworkPeeringTimeoutsOutputReference" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_network_peering

computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeNetworkPeeringTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetworkPeering.ComputeNetworkPeeringTimeouts">ComputeNetworkPeeringTimeouts</a>

---



