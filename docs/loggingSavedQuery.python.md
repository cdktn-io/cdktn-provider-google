# `loggingSavedQuery` Submodule <a name="`loggingSavedQuery` Submodule" id="@cdktn/provider-google.loggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingSavedQuery <a name="LoggingSavedQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQuery(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  name: str,
  parent: str,
  visibility: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  logging_query: LoggingSavedQueryLoggingQuery = None,
  ops_analytics_query: LoggingSavedQueryOpsAnalyticsQuery = None,
  timeouts: LoggingSavedQueryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.loggingQuery">logging_query</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery">ops_analytics_query</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.displayName"></a>

- *Type:* str

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.name"></a>

- *Type:* str

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.description"></a>

- *Type:* str

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_query`<sup>Optional</sup> <a name="logging_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.loggingQuery"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}

---

##### `ops_analytics_query`<sup>Optional</sup> <a name="ops_analytics_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery">put_logging_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery">put_ops_analytics_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery">reset_logging_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery">reset_ops_analytics_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_query` <a name="put_logging_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery"></a>

```python
def put_logging_query(
  filter: str,
  summary_field_end: typing.Union[int, float] = None,
  summary_fields: IResolvable | typing.List[LoggingSavedQueryLoggingQuerySummaryFields] = None,
  summary_field_start: typing.Union[int, float] = None
) -> None
```

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.filter"></a>

- *Type:* str

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#filter LoggingSavedQuery#filter}

---

###### `summary_field_end`<sup>Optional</sup> <a name="summary_field_end" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.summaryFieldEnd"></a>

- *Type:* typing.Union[int, float]

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_end LoggingSavedQuery#summary_field_end}

---

###### `summary_fields`<sup>Optional</sup> <a name="summary_fields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.summaryFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_fields LoggingSavedQuery#summary_fields}

---

###### `summary_field_start`<sup>Optional</sup> <a name="summary_field_start" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.summaryFieldStart"></a>

- *Type:* typing.Union[int, float]

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_start LoggingSavedQuery#summary_field_start}

---

##### `put_ops_analytics_query` <a name="put_ops_analytics_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery"></a>

```python
def put_ops_analytics_query(
  sql_query_text: str
) -> None
```

###### `sql_query_text`<sup>Required</sup> <a name="sql_query_text" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery.parameter.sqlQueryText"></a>

- *Type:* str

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#sql_query_text LoggingSavedQuery#sql_query_text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_query` <a name="reset_logging_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery"></a>

```python
def reset_logging_query() -> None
```

##### `reset_ops_analytics_query` <a name="reset_ops_analytics_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```python
def reset_ops_analytics_query() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoggingSavedQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery">logging_query</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery">ops_analytics_query</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput">logging_query_input</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput">ops_analytics_query_input</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `logging_query`<sup>Required</sup> <a name="logging_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery"></a>

```python
logging_query: LoggingSavedQueryLoggingQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `ops_analytics_query`<sup>Required</sup> <a name="ops_analytics_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery"></a>

```python
ops_analytics_query: LoggingSavedQueryOpsAnalyticsQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts"></a>

```python
timeouts: LoggingSavedQueryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_query_input`<sup>Optional</sup> <a name="logging_query_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput"></a>

```python
logging_query_input: LoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ops_analytics_query_input`<sup>Optional</sup> <a name="ops_analytics_query_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```python
ops_analytics_query_input: LoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LoggingSavedQueryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingSavedQueryConfig <a name="LoggingSavedQueryConfig" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  name: str,
  parent: str,
  visibility: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  logging_query: LoggingSavedQueryLoggingQuery = None,
  ops_analytics_query: LoggingSavedQueryOpsAnalyticsQuery = None,
  timeouts: LoggingSavedQueryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location">location</a></code> | <code>str</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name">name</a></code> | <code>str</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description">description</a></code> | <code>str</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery">logging_query</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery">ops_analytics_query</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_query`<sup>Optional</sup> <a name="logging_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery"></a>

```python
logging_query: LoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}

---

##### `ops_analytics_query`<sup>Optional</sup> <a name="ops_analytics_query" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```python
ops_analytics_query: LoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts"></a>

```python
timeouts: LoggingSavedQueryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}

---

### LoggingSavedQueryLoggingQuery <a name="LoggingSavedQueryLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryLoggingQuery(
  filter: str,
  summary_field_end: typing.Union[int, float] = None,
  summary_fields: IResolvable | typing.List[LoggingSavedQueryLoggingQuerySummaryFields] = None,
  summary_field_start: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter">filter</a></code> | <code>str</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd">summary_field_end</a></code> | <code>typing.Union[int, float]</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields">summary_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart">summary_field_start</a></code> | <code>typing.Union[int, float]</code> | Characters will be counted from the start of the string. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter"></a>

```python
filter: str
```

- *Type:* str

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#filter LoggingSavedQuery#filter}

---

##### `summary_field_end`<sup>Optional</sup> <a name="summary_field_end" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```python
summary_field_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_end LoggingSavedQuery#summary_field_end}

---

##### `summary_fields`<sup>Optional</sup> <a name="summary_fields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```python
summary_fields: IResolvable | typing.List[LoggingSavedQueryLoggingQuerySummaryFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_fields LoggingSavedQuery#summary_fields}

---

##### `summary_field_start`<sup>Optional</sup> <a name="summary_field_start" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```python
summary_field_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_start LoggingSavedQuery#summary_field_start}

---

### LoggingSavedQueryLoggingQuerySummaryFields <a name="LoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields(
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field">field</a></code> | <code>str</code> | The field from the LogEntry to include in the summary line. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```python
field: str
```

- *Type:* str

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#field LoggingSavedQuery#field}

---

### LoggingSavedQueryOpsAnalyticsQuery <a name="LoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery(
  sql_query_text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">sql_query_text</a></code> | <code>str</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `sql_query_text`<sup>Required</sup> <a name="sql_query_text" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```python
sql_query_text: str
```

- *Type:* str

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#sql_query_text LoggingSavedQuery#sql_query_text}

---

### LoggingSavedQueryTimeouts <a name="LoggingSavedQueryTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingSavedQueryLoggingQueryOutputReference <a name="LoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">put_summary_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">reset_summary_field_end</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">reset_summary_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">reset_summary_field_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_summary_fields` <a name="put_summary_fields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```python
def put_summary_fields(
  value: IResolvable | typing.List[LoggingSavedQueryLoggingQuerySummaryFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]

---

##### `reset_summary_field_end` <a name="reset_summary_field_end" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```python
def reset_summary_field_end() -> None
```

##### `reset_summary_fields` <a name="reset_summary_fields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```python
def reset_summary_fields() -> None
```

##### `reset_summary_field_start` <a name="reset_summary_field_start" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```python
def reset_summary_field_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">summary_fields</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">summary_field_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">summary_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">summary_field_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">summary_field_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">summary_field_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `summary_fields`<sup>Required</sup> <a name="summary_fields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```python
summary_fields: LoggingSavedQueryLoggingQuerySummaryFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `summary_field_end_input`<sup>Optional</sup> <a name="summary_field_end_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```python
summary_field_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summary_fields_input`<sup>Optional</sup> <a name="summary_fields_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```python
summary_fields_input: IResolvable | typing.List[LoggingSavedQueryLoggingQuerySummaryFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]

---

##### `summary_field_start_input`<sup>Optional</sup> <a name="summary_field_start_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```python
summary_field_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `summary_field_end`<sup>Required</sup> <a name="summary_field_end" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```python
summary_field_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summary_field_start`<sup>Required</sup> <a name="summary_field_start" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```python
summary_field_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```python
internal_value: LoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---


### LoggingSavedQueryLoggingQuerySummaryFieldsList <a name="LoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LoggingSavedQueryLoggingQuerySummaryFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>]

---


### LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoggingSavedQueryLoggingQuerySummaryFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>

---


### LoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="LoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">sql_query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">sql_query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_query_text_input`<sup>Optional</sup> <a name="sql_query_text_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```python
sql_query_text_input: str
```

- *Type:* str

---

##### `sql_query_text`<sup>Required</sup> <a name="sql_query_text" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```python
sql_query_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```python
internal_value: LoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---


### LoggingSavedQueryTimeoutsOutputReference <a name="LoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import logging_saved_query

loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoggingSavedQueryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---



