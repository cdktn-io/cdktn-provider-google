# `networkServicesLbEdgeExtension` Submodule <a name="`networkServicesLbEdgeExtension` Submodule" id="@cdktn/provider-google.networkServicesLbEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesLbEdgeExtension <a name="NetworkServicesLbEdgeExtension" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension google_network_services_lb_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_chains: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChains],
  forwarding_rules: typing.List[str],
  load_balancing_scheme: str,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesLbEdgeExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.extensionChains">extension_chains</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"]. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the edge extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.extensionChains"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#extension_chains NetworkServicesLbEdgeExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.forwardingRules"></a>

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached.

At least one forwarding rule is required. Only one LbEdgeExtension resource can be associated with a forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#forwarding_rules NetworkServicesLbEdgeExtension#forwarding_rules}

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#load_balancing_scheme NetworkServicesLbEdgeExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.location"></a>

- *Type:* str

The location of the edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#location NetworkServicesLbEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.name"></a>

- *Type:* str

Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#deletion_policy NetworkServicesLbEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#description NetworkServicesLbEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the LbEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#labels NetworkServicesLbEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#timeouts NetworkServicesLbEdgeExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putExtensionChains">put_extension_chains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_chains` <a name="put_extension_chains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putExtensionChains"></a>

```python
def put_extension_chains(
  value: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChains]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#create NetworkServicesLbEdgeExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#delete NetworkServicesLbEdgeExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#update NetworkServicesLbEdgeExtension#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isConstruct"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesLbEdgeExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesLbEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesLbEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChains">extension_chains</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList">NetworkServicesLbEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference">NetworkServicesLbEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChainsInput">extension_chains_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRulesInput">forwarding_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChains"></a>

```python
extension_chains: NetworkServicesLbEdgeExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList">NetworkServicesLbEdgeExtensionExtensionChainsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeouts"></a>

```python
timeouts: NetworkServicesLbEdgeExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference">NetworkServicesLbEdgeExtensionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_chains_input`<sup>Optional</sup> <a name="extension_chains_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChainsInput"></a>

```python
extension_chains_input: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]

---

##### `forwarding_rules_input`<sup>Optional</sup> <a name="forwarding_rules_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRulesInput"></a>

```python
forwarding_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesLbEdgeExtensionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesLbEdgeExtensionConfig <a name="NetworkServicesLbEdgeExtensionConfig" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_chains: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChains],
  forwarding_rules: typing.List[str],
  load_balancing_scheme: str,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesLbEdgeExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.extensionChains">extension_chains</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"]. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.location">location</a></code> | <code>str</code> | The location of the edge extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.name">name</a></code> | <code>str</code> | Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.extensionChains"></a>

```python
extension_chains: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#extension_chains NetworkServicesLbEdgeExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached.

At least one forwarding rule is required. Only one LbEdgeExtension resource can be associated with a forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#forwarding_rules NetworkServicesLbEdgeExtension#forwarding_rules}

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#load_balancing_scheme NetworkServicesLbEdgeExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#location NetworkServicesLbEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#deletion_policy NetworkServicesLbEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#description NetworkServicesLbEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the LbEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#labels NetworkServicesLbEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesLbEdgeExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#timeouts NetworkServicesLbEdgeExtension#timeouts}

---

### NetworkServicesLbEdgeExtensionExtensionChains <a name="NetworkServicesLbEdgeExtensionExtensionChains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains(
  extensions: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChainsExtensions],
  match_condition: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.extensions">extensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]</code> | extensions block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.name">name</a></code> | <code>str</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.extensions"></a>

```python
extensions: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChainsExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#extensions NetworkServicesLbEdgeExtension#extensions}

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.matchCondition"></a>

```python
match_condition: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#match_condition NetworkServicesLbEdgeExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

### NetworkServicesLbEdgeExtensionExtensionChainsExtensions <a name="NetworkServicesLbEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions(
  name: str,
  service: str,
  fail_open: bool | IResolvable = None,
  forward_headers: typing.List[str] = None,
  supported_events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>str</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | A set of events during request or response processing for which this extension is called. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.service"></a>

```python
service: str
```

- *Type:* str

The reference to the service that runs the extension.

* To configure a callout extension, service must be a fully-qualified reference to a backend service.
* To configure a plugin extension, service must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#service NetworkServicesLbEdgeExtension#service}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#fail_open NetworkServicesLbEdgeExtension#fail_open}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#forward_headers NetworkServicesLbEdgeExtension#forward_headers}

---

##### `supported_events`<sup>Optional</sup> <a name="supported_events" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

A set of events during request or response processing for which this extension is called.

This field is required for the LbEdgeExtension resource and only supports the value 'REQUEST_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#supported_events NetworkServicesLbEdgeExtension#supported_events}

---

### NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition <a name="NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition(
  cel_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.property.celExpression">cel_expression</a></code> | <code>str</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#cel_expression NetworkServicesLbEdgeExtension#cel_expression}

---

### NetworkServicesLbEdgeExtensionTimeouts <a name="NetworkServicesLbEdgeExtensionTimeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#create NetworkServicesLbEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#delete NetworkServicesLbEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#update NetworkServicesLbEdgeExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#create NetworkServicesLbEdgeExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#delete NetworkServicesLbEdgeExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#update NetworkServicesLbEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList <a name="NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChainsExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]

---


### NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference <a name="NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">reset_supported_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_supported_events` <a name="reset_supported_events" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```python
def reset_supported_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supported_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `supported_events_input`<sup>Optional</sup> <a name="supported_events_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```python
supported_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `supported_events`<sup>Required</sup> <a name="supported_events" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesLbEdgeExtensionExtensionChainsExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>

---


### NetworkServicesLbEdgeExtensionExtensionChainsList <a name="NetworkServicesLbEdgeExtensionExtensionChainsList" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesLbEdgeExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>]

---


### NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">cel_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">cel_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cel_expression_input`<sup>Optional</sup> <a name="cel_expression_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```python
cel_expression_input: str
```

- *Type:* str

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---


### NetworkServicesLbEdgeExtensionExtensionChainsOutputReference <a name="NetworkServicesLbEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extensions` <a name="put_extensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```python
def put_extensions(
  value: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChainsExtensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]

---

##### `put_match_condition` <a name="put_match_condition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  cel_expression: str
) -> None
```

###### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.celExpression"></a>

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_services_lb_edge_extension#cel_expression NetworkServicesLbEdgeExtension#cel_expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList">NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">extensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```python
extensions: NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList">NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```python
match_condition: NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```python
extensions_input: IResolvable | typing.List[NetworkServicesLbEdgeExtensionExtensionChainsExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions">NetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesLbEdgeExtensionExtensionChains
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains">NetworkServicesLbEdgeExtensionExtensionChains</a>

---


### NetworkServicesLbEdgeExtensionTimeoutsOutputReference <a name="NetworkServicesLbEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_lb_edge_extension

networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesLbEdgeExtensionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a>

---



