# `managedKafkaAclBinding` Submodule <a name="`managedKafkaAclBinding` Submodule" id="@cdktn/provider-google.managedKafkaAclBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaAclBinding <a name="ManagedKafkaAclBinding" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding google_managed_kafka_acl_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_id: str,
  cluster: str,
  location: str,
  operation: str,
  principal: str,
  deletion_policy: str = None,
  host: str = None,
  id: str = None,
  permission_type: str = None,
  project: str = None,
  timeouts: ManagedKafkaAclBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.aclId">acl_id</a></code> | <code>str</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.operation">operation</a></code> | <code>str</code> | The operation type. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.principal">principal</a></code> | <code>str</code> | The principal. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.host">host</a></code> | <code>str</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.permissionType">permission_type</a></code> | <code>str</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.aclId"></a>

- *Type:* str

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#acl_id ManagedKafkaAclBinding#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.cluster"></a>

- *Type:* str

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#cluster ManagedKafkaAclBinding#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.location"></a>

- *Type:* str

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#location ManagedKafkaAclBinding#location}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.operation"></a>

- *Type:* str

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#operation ManagedKafkaAclBinding#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.principal"></a>

- *Type:* str

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#principal ManagedKafkaAclBinding#principal}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#deletion_policy ManagedKafkaAclBinding#deletion_policy}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.host"></a>

- *Type:* str

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#host ManagedKafkaAclBinding#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission_type`<sup>Optional</sup> <a name="permission_type" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.permissionType"></a>

- *Type:* str

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#permission_type ManagedKafkaAclBinding#permission_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#timeouts ManagedKafkaAclBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetPermissionType">reset_permission_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permission_type` <a name="reset_permission_type" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetPermissionType"></a>

```python
def reset_permission_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedKafkaAclBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedKafkaAclBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaAclBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference">ManagedKafkaAclBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclIdInput">acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionTypeInput">permission_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclId">acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionType">permission_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeouts"></a>

```python
timeouts: ManagedKafkaAclBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference">ManagedKafkaAclBindingTimeoutsOutputReference</a>

---

##### `acl_id_input`<sup>Optional</sup> <a name="acl_id_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclIdInput"></a>

```python
acl_id_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `permission_type_input`<sup>Optional</sup> <a name="permission_type_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionTypeInput"></a>

```python
permission_type_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ManagedKafkaAclBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclId"></a>

```python
acl_id: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaAclBindingConfig <a name="ManagedKafkaAclBindingConfig" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_id: str,
  cluster: str,
  location: str,
  operation: str,
  principal: str,
  deletion_policy: str = None,
  host: str = None,
  id: str = None,
  permission_type: str = None,
  project: str = None,
  timeouts: ManagedKafkaAclBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.aclId">acl_id</a></code> | <code>str</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.cluster">cluster</a></code> | <code>str</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.location">location</a></code> | <code>str</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.operation">operation</a></code> | <code>str</code> | The operation type. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.principal">principal</a></code> | <code>str</code> | The principal. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.host">host</a></code> | <code>str</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.permissionType">permission_type</a></code> | <code>str</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_id`<sup>Required</sup> <a name="acl_id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.aclId"></a>

```python
acl_id: str
```

- *Type:* str

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#acl_id ManagedKafkaAclBinding#acl_id}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#cluster ManagedKafkaAclBinding#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#location ManagedKafkaAclBinding#location}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#operation ManagedKafkaAclBinding#operation}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#principal ManagedKafkaAclBinding#principal}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#deletion_policy ManagedKafkaAclBinding#deletion_policy}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#host ManagedKafkaAclBinding#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission_type`<sup>Optional</sup> <a name="permission_type" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#permission_type ManagedKafkaAclBinding#permission_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.timeouts"></a>

```python
timeouts: ManagedKafkaAclBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#timeouts ManagedKafkaAclBinding#timeouts}

---

### ManagedKafkaAclBindingTimeouts <a name="ManagedKafkaAclBindingTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaAclBindingTimeoutsOutputReference <a name="ManagedKafkaAclBindingTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import managed_kafka_acl_binding

managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedKafkaAclBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---



