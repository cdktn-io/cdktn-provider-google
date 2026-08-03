# `spannerInstancePartition` Submodule <a name="`spannerInstancePartition` Submodule" id="@cdktn/provider-google.spannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstancePartition <a name="SpannerInstancePartition" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: str,
  display_name: str,
  instance: str,
  name: str,
  autoscaling_config: SpannerInstancePartitionAutoscalingConfig = None,
  deletion_policy: str = None,
  id: str = None,
  node_count: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: SpannerInstancePartitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code>str</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* str

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.displayName"></a>

- *Type:* str

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.instance"></a>

- *Type:* str

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.autoscalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#autoscaling_config SpannerInstancePartition#autoscaling_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#deletion_policy SpannerInstancePartition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.processingUnits"></a>

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig">put_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetAutoscalingConfig">reset_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits">reset_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_config` <a name="put_autoscaling_config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig"></a>

```python
def put_autoscaling_config(
  autoscaling_limits: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits = None,
  autoscaling_targets: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets = None
) -> None
```

###### `autoscaling_limits`<sup>Optional</sup> <a name="autoscaling_limits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig.parameter.autoscalingLimits"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#autoscaling_limits SpannerInstancePartition#autoscaling_limits}

---

###### `autoscaling_targets`<sup>Optional</sup> <a name="autoscaling_targets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig.parameter.autoscalingTargets"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#autoscaling_targets SpannerInstancePartition#autoscaling_targets}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

##### `reset_autoscaling_config` <a name="reset_autoscaling_config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetAutoscalingConfig"></a>

```python
def reset_autoscaling_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_processing_units` <a name="reset_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits"></a>

```python
def reset_processing_units() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpannerInstancePartition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference">SpannerInstancePartitionAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfigInput">autoscaling_config_input</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput">processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `autoscaling_config`<sup>Required</sup> <a name="autoscaling_config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfig"></a>

```python
autoscaling_config: SpannerInstancePartitionAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference">SpannerInstancePartitionAutoscalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts"></a>

```python
timeouts: SpannerInstancePartitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `autoscaling_config_input`<sup>Optional</sup> <a name="autoscaling_config_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfigInput"></a>

```python
autoscaling_config_input: SpannerInstancePartitionAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units_input`<sup>Optional</sup> <a name="processing_units_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput"></a>

```python
processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SpannerInstancePartitionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units`<sup>Required</sup> <a name="processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstancePartitionAutoscalingConfig <a name="SpannerInstancePartitionAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig(
  autoscaling_limits: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits = None,
  autoscaling_targets: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets">autoscaling_targets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `autoscaling_limits`<sup>Optional</sup> <a name="autoscaling_limits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits"></a>

```python
autoscaling_limits: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#autoscaling_limits SpannerInstancePartition#autoscaling_limits}

---

##### `autoscaling_targets`<sup>Optional</sup> <a name="autoscaling_targets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets"></a>

```python
autoscaling_targets: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#autoscaling_targets SpannerInstancePartition#autoscaling_targets}

---

### SpannerInstancePartitionAutoscalingConfigAutoscalingLimits <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits(
  max_nodes: typing.Union[int, float] = None,
  max_processing_units: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  min_processing_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">max_processing_units</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum number of processing units allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">min_processing_units</a></code> | <code>typing.Union[int, float]</code> | Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000. |

---

##### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#max_nodes SpannerInstancePartition#max_nodes}

---

##### `max_processing_units`<sup>Optional</sup> <a name="max_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```python
max_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum number of processing units allocated to the instance partition.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#max_processing_units SpannerInstancePartition#max_processing_units}

---

##### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#min_nodes SpannerInstancePartition#min_nodes}

---

##### `min_processing_units`<sup>Optional</sup> <a name="min_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```python
min_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#min_processing_units SpannerInstancePartition#min_processing_units}

---

### SpannerInstancePartitionAutoscalingConfigAutoscalingTargets <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets(
  high_priority_cpu_utilization_percent: typing.Union[int, float] = None,
  storage_utilization_percent: typing.Union[int, float] = None,
  total_cpu_utilization_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">high_priority_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storage_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent">total_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |

---

##### `high_priority_cpu_utilization_percent`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```python
high_priority_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#high_priority_cpu_utilization_percent SpannerInstancePartition#high_priority_cpu_utilization_percent}

---

##### `storage_utilization_percent`<sup>Optional</sup> <a name="storage_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```python
storage_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#storage_utilization_percent SpannerInstancePartition#storage_utilization_percent}

---

##### `total_cpu_utilization_percent`<sup>Optional</sup> <a name="total_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent"></a>

```python
total_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#total_cpu_utilization_percent SpannerInstancePartition#total_cpu_utilization_percent}

---

### SpannerInstancePartitionConfig <a name="SpannerInstancePartitionConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: str,
  display_name: str,
  instance: str,
  name: str,
  autoscaling_config: SpannerInstancePartitionAutoscalingConfig = None,
  deletion_policy: str = None,
  id: str = None,
  node_count: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: SpannerInstancePartitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config">config</a></code> | <code>str</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance">instance</a></code> | <code>str</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config"></a>

```python
config: str
```

- *Type:* str

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.autoscalingConfig"></a>

```python
autoscaling_config: SpannerInstancePartitionAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#autoscaling_config SpannerInstancePartition#autoscaling_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#deletion_policy SpannerInstancePartition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts"></a>

```python
timeouts: SpannerInstancePartitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

### SpannerInstancePartitionTimeouts <a name="SpannerInstancePartitionTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">reset_max_nodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">reset_max_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">reset_min_nodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">reset_min_processing_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_nodes` <a name="reset_max_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```python
def reset_max_nodes() -> None
```

##### `reset_max_processing_units` <a name="reset_max_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```python
def reset_max_processing_units() -> None
```

##### `reset_min_nodes` <a name="reset_min_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```python
def reset_min_nodes() -> None
```

##### `reset_min_processing_units` <a name="reset_min_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```python
def reset_min_processing_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">max_processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">min_processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">max_processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">min_processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_processing_units_input`<sup>Optional</sup> <a name="max_processing_units_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```python
max_processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_processing_units_input`<sup>Optional</sup> <a name="min_processing_units_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```python
min_processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_processing_units`<sup>Required</sup> <a name="max_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```python
max_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_processing_units`<sup>Required</sup> <a name="min_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```python
min_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---


### SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">reset_high_priority_cpu_utilization_percent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">reset_storage_utilization_percent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent">reset_total_cpu_utilization_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_high_priority_cpu_utilization_percent` <a name="reset_high_priority_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```python
def reset_high_priority_cpu_utilization_percent() -> None
```

##### `reset_storage_utilization_percent` <a name="reset_storage_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```python
def reset_storage_utilization_percent() -> None
```

##### `reset_total_cpu_utilization_percent` <a name="reset_total_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent"></a>

```python
def reset_total_cpu_utilization_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">high_priority_cpu_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storage_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput">total_cpu_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">high_priority_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storage_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent">total_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `high_priority_cpu_utilization_percent_input`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```python
high_priority_cpu_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_utilization_percent_input`<sup>Optional</sup> <a name="storage_utilization_percent_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```python
storage_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_cpu_utilization_percent_input`<sup>Optional</sup> <a name="total_cpu_utilization_percent_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput"></a>

```python
total_cpu_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `high_priority_cpu_utilization_percent`<sup>Required</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```python
high_priority_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_utilization_percent`<sup>Required</sup> <a name="storage_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```python
storage_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_cpu_utilization_percent`<sup>Required</sup> <a name="total_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent"></a>

```python
total_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---


### SpannerInstancePartitionAutoscalingConfigOutputReference <a name="SpannerInstancePartitionAutoscalingConfigOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits">put_autoscaling_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets">put_autoscaling_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits">reset_autoscaling_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets">reset_autoscaling_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_limits` <a name="put_autoscaling_limits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```python
def put_autoscaling_limits(
  max_nodes: typing.Union[int, float] = None,
  max_processing_units: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  min_processing_units: typing.Union[int, float] = None
) -> None
```

###### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

Specifies maximum number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#max_nodes SpannerInstancePartition#max_nodes}

---

###### `max_processing_units`<sup>Optional</sup> <a name="max_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.maxProcessingUnits"></a>

- *Type:* typing.Union[int, float]

Specifies maximum number of processing units allocated to the instance partition.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#max_processing_units SpannerInstancePartition#max_processing_units}

---

###### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

Specifies number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#min_nodes SpannerInstancePartition#min_nodes}

---

###### `min_processing_units`<sup>Optional</sup> <a name="min_processing_units" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.minProcessingUnits"></a>

- *Type:* typing.Union[int, float]

Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#min_processing_units SpannerInstancePartition#min_processing_units}

---

##### `put_autoscaling_targets` <a name="put_autoscaling_targets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```python
def put_autoscaling_targets(
  high_priority_cpu_utilization_percent: typing.Union[int, float] = None,
  storage_utilization_percent: typing.Union[int, float] = None,
  total_cpu_utilization_percent: typing.Union[int, float] = None
) -> None
```

###### `high_priority_cpu_utilization_percent`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.highPriorityCpuUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#high_priority_cpu_utilization_percent SpannerInstancePartition#high_priority_cpu_utilization_percent}

---

###### `storage_utilization_percent`<sup>Optional</sup> <a name="storage_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.storageUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#storage_utilization_percent SpannerInstancePartition#storage_utilization_percent}

---

###### `total_cpu_utilization_percent`<sup>Optional</sup> <a name="total_cpu_utilization_percent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.totalCpuUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/spanner_instance_partition#total_cpu_utilization_percent SpannerInstancePartition#total_cpu_utilization_percent}

---

##### `reset_autoscaling_limits` <a name="reset_autoscaling_limits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```python
def reset_autoscaling_limits() -> None
```

##### `reset_autoscaling_targets` <a name="reset_autoscaling_targets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```python
def reset_autoscaling_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets">autoscaling_targets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscaling_limits_input</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscaling_targets_input</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```python
autoscaling_limits: SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscaling_targets`<sup>Required</sup> <a name="autoscaling_targets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```python
autoscaling_targets: SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `autoscaling_limits_input`<sup>Optional</sup> <a name="autoscaling_limits_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```python
autoscaling_limits_input: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscaling_targets_input`<sup>Optional</sup> <a name="autoscaling_targets_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```python
autoscaling_targets_input: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstancePartitionAutoscalingConfig
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---


### SpannerInstancePartitionTimeoutsOutputReference <a name="SpannerInstancePartitionTimeoutsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SpannerInstancePartitionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---



