# `managedKafkaConnector` Submodule <a name="`managedKafkaConnector` Submodule" id="@cdktn/provider-google.managedKafkaConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaConnector <a name="ManagedKafkaConnector" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector google_managed_kafka_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connect_cluster: str,
  connector_id: str,
  location: str,
  configs: typing.Mapping[str] = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  task_restart_policy: ManagedKafkaConnectorTaskRestartPolicy = None,
  timeouts: ManagedKafkaConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectCluster">connect_cluster</a></code> | <code>str</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectorId">connector_id</a></code> | <code>str</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.location">location</a></code> | <code>str</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.configs">configs</a></code> | <code>typing.Mapping[str]</code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.taskRestartPolicy">task_restart_policy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connect_cluster`<sup>Required</sup> <a name="connect_cluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectCluster"></a>

- *Type:* str

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectorId"></a>

- *Type:* str

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.location"></a>

- *Type:* str

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.configs"></a>

- *Type:* typing.Mapping[str]

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#deletion_policy ManagedKafkaConnector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}.

---

##### `task_restart_policy`<sup>Optional</sup> <a name="task_restart_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.taskRestartPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy">put_task_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs">reset_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy">reset_task_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_task_restart_policy` <a name="put_task_restart_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy"></a>

```python
def put_task_restart_policy(
  maximum_backoff: str = None,
  minimum_backoff: str = None
) -> None
```

###### `maximum_backoff`<sup>Optional</sup> <a name="maximum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy.parameter.maximumBackoff"></a>

- *Type:* str

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#maximum_backoff ManagedKafkaConnector#maximum_backoff}

---

###### `minimum_backoff`<sup>Optional</sup> <a name="minimum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy.parameter.minimumBackoff"></a>

- *Type:* str

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#minimum_backoff ManagedKafkaConnector#minimum_backoff}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}.

---

##### `reset_configs` <a name="reset_configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs"></a>

```python
def reset_configs() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_task_restart_policy` <a name="reset_task_restart_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy"></a>

```python
def reset_task_restart_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedKafkaConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedKafkaConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy">task_restart_policy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput">configs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput">connect_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput">connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput">task_restart_policy_input</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs">configs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster">connect_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `task_restart_policy`<sup>Required</sup> <a name="task_restart_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy"></a>

```python
task_restart_policy: ManagedKafkaConnectorTaskRestartPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts"></a>

```python
timeouts: ManagedKafkaConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a>

---

##### `configs_input`<sup>Optional</sup> <a name="configs_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput"></a>

```python
configs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connect_cluster_input`<sup>Optional</sup> <a name="connect_cluster_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput"></a>

```python
connect_cluster_input: str
```

- *Type:* str

---

##### `connector_id_input`<sup>Optional</sup> <a name="connector_id_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput"></a>

```python
connector_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `task_restart_policy_input`<sup>Optional</sup> <a name="task_restart_policy_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput"></a>

```python
task_restart_policy_input: ManagedKafkaConnectorTaskRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ManagedKafkaConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs"></a>

```python
configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connect_cluster`<sup>Required</sup> <a name="connect_cluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster"></a>

```python
connect_cluster: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaConnectorConfig <a name="ManagedKafkaConnectorConfig" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connect_cluster: str,
  connector_id: str,
  location: str,
  configs: typing.Mapping[str] = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  task_restart_policy: ManagedKafkaConnectorTaskRestartPolicy = None,
  timeouts: ManagedKafkaConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster">connect_cluster</a></code> | <code>str</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId">connector_id</a></code> | <code>str</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location">location</a></code> | <code>str</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs">configs</a></code> | <code>typing.Mapping[str]</code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy">task_restart_policy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connect_cluster`<sup>Required</sup> <a name="connect_cluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster"></a>

```python
connect_cluster: str
```

- *Type:* str

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs"></a>

```python
configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#deletion_policy ManagedKafkaConnector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}.

---

##### `task_restart_policy`<sup>Optional</sup> <a name="task_restart_policy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy"></a>

```python
task_restart_policy: ManagedKafkaConnectorTaskRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts"></a>

```python
timeouts: ManagedKafkaConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}

---

### ManagedKafkaConnectorTaskRestartPolicy <a name="ManagedKafkaConnectorTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy(
  maximum_backoff: str = None,
  minimum_backoff: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | The maximum amount of time to wait before retrying a failed task. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | The minimum amount of time to wait before retrying a failed task. |

---

##### `maximum_backoff`<sup>Optional</sup> <a name="maximum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#maximum_backoff ManagedKafkaConnector#maximum_backoff}

---

##### `minimum_backoff`<sup>Optional</sup> <a name="minimum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#minimum_backoff ManagedKafkaConnector#minimum_backoff}

---

### ManagedKafkaConnectorTimeouts <a name="ManagedKafkaConnectorTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaConnectorTaskRestartPolicyOutputReference <a name="ManagedKafkaConnectorTaskRestartPolicyOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff">reset_maximum_backoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff">reset_minimum_backoff</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_backoff` <a name="reset_maximum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff"></a>

```python
def reset_maximum_backoff() -> None
```

##### `reset_minimum_backoff` <a name="reset_minimum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff"></a>

```python
def reset_minimum_backoff() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput">maximum_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput">minimum_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_backoff_input`<sup>Optional</sup> <a name="maximum_backoff_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput"></a>

```python
maximum_backoff_input: str
```

- *Type:* str

---

##### `minimum_backoff_input`<sup>Optional</sup> <a name="minimum_backoff_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput"></a>

```python
minimum_backoff_input: str
```

- *Type:* str

---

##### `maximum_backoff`<sup>Required</sup> <a name="maximum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

---

##### `minimum_backoff`<sup>Required</sup> <a name="minimum_backoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ManagedKafkaConnectorTaskRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---


### ManagedKafkaConnectorTimeoutsOutputReference <a name="ManagedKafkaConnectorTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_connector

managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedKafkaConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---



