# `networkServicesMulticastGroupProducerActivation` Submodule <a name="`networkServicesMulticastGroupProducerActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupProducerActivation <a name="NetworkServicesMulticastGroupProducerActivation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation google_network_services_multicast_group_producer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_group_producer_activation_id: str,
  multicast_group_range_activation: str,
  multicast_producer_association: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesMulticastGroupProducerActivationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupProducerActivationId">multicast_group_producer_activation_id</a></code> | <code>str</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupRangeActivation">multicast_group_range_activation</a></code> | <code>str</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastProducerAssociation">multicast_producer_association</a></code> | <code>str</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#location NetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicast_group_producer_activation_id`<sup>Required</sup> <a name="multicast_group_producer_activation_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupProducerActivationId"></a>

- *Type:* str

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_producer_activation_id NetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicast_group_range_activation`<sup>Required</sup> <a name="multicast_group_range_activation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastGroupRangeActivation"></a>

- *Type:* str

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_range_activation NetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_producer_association`<sup>Required</sup> <a name="multicast_producer_association" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.multicastProducerAssociation"></a>

- *Type:* str

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#multicast_producer_association NetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#deletion_policy NetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.description"></a>

- *Type:* str

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#description NetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#labels NetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#timeouts NetworkServicesMulticastGroupProducerActivation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#create NetworkServicesMulticastGroupProducerActivation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#delete NetworkServicesMulticastGroupProducerActivation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#update NetworkServicesMulticastGroupProducerActivation#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isConstruct"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesMulticastGroupProducerActivation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesMulticastGroupProducerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupProducerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList">NetworkServicesMulticastGroupProducerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput">multicast_group_producer_activation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput">multicast_group_range_activation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput">multicast_producer_association_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId">multicast_group_producer_activation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation">multicast_group_range_activation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation">multicast_producer_association</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.state"></a>

```python
state: NetworkServicesMulticastGroupProducerActivationStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList">NetworkServicesMulticastGroupProducerActivationStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multicast_group_producer_activation_id_input`<sup>Optional</sup> <a name="multicast_group_producer_activation_id_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput"></a>

```python
multicast_group_producer_activation_id_input: str
```

- *Type:* str

---

##### `multicast_group_range_activation_input`<sup>Optional</sup> <a name="multicast_group_range_activation_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput"></a>

```python
multicast_group_range_activation_input: str
```

- *Type:* str

---

##### `multicast_producer_association_input`<sup>Optional</sup> <a name="multicast_producer_association_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput"></a>

```python
multicast_producer_association_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesMulticastGroupProducerActivationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multicast_group_producer_activation_id`<sup>Required</sup> <a name="multicast_group_producer_activation_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId"></a>

```python
multicast_group_producer_activation_id: str
```

- *Type:* str

---

##### `multicast_group_range_activation`<sup>Required</sup> <a name="multicast_group_range_activation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation"></a>

```python
multicast_group_range_activation: str
```

- *Type:* str

---

##### `multicast_producer_association`<sup>Required</sup> <a name="multicast_producer_association" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation"></a>

```python
multicast_producer_association: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupProducerActivationConfig <a name="NetworkServicesMulticastGroupProducerActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_group_producer_activation_id: str,
  multicast_group_range_activation: str,
  multicast_producer_association: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesMulticastGroupProducerActivationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId">multicast_group_producer_activation_id</a></code> | <code>str</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation">multicast_group_range_activation</a></code> | <code>str</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation">multicast_producer_association</a></code> | <code>str</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.description">description</a></code> | <code>str</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#location NetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicast_group_producer_activation_id`<sup>Required</sup> <a name="multicast_group_producer_activation_id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId"></a>

```python
multicast_group_producer_activation_id: str
```

- *Type:* str

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_producer_activation_id NetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicast_group_range_activation`<sup>Required</sup> <a name="multicast_group_range_activation" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation"></a>

```python
multicast_group_range_activation: str
```

- *Type:* str

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#multicast_group_range_activation NetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicast_producer_association`<sup>Required</sup> <a name="multicast_producer_association" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation"></a>

```python
multicast_producer_association: str
```

- *Type:* str

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#multicast_producer_association NetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#deletion_policy NetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#description NetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#id NetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#labels NetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#project NetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastGroupProducerActivationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#timeouts NetworkServicesMulticastGroupProducerActivation#timeouts}

---

### NetworkServicesMulticastGroupProducerActivationState <a name="NetworkServicesMulticastGroupProducerActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState()
```


### NetworkServicesMulticastGroupProducerActivationTimeouts <a name="NetworkServicesMulticastGroupProducerActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#create NetworkServicesMulticastGroupProducerActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#delete NetworkServicesMulticastGroupProducerActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#update NetworkServicesMulticastGroupProducerActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#create NetworkServicesMulticastGroupProducerActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#delete NetworkServicesMulticastGroupProducerActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_producer_activation#update NetworkServicesMulticastGroupProducerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupProducerActivationStateList <a name="NetworkServicesMulticastGroupProducerActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesMulticastGroupProducerActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkServicesMulticastGroupProducerActivationStateOutputReference <a name="NetworkServicesMulticastGroupProducerActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState">NetworkServicesMulticastGroupProducerActivationState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastGroupProducerActivationState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationState">NetworkServicesMulticastGroupProducerActivationState</a>

---


### NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_group_producer_activation

networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesMulticastGroupProducerActivationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupProducerActivation.NetworkServicesMulticastGroupProducerActivationTimeouts">NetworkServicesMulticastGroupProducerActivationTimeouts</a>

---



