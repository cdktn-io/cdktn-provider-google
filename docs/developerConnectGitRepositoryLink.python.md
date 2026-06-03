# `developerConnectGitRepositoryLink` Submodule <a name="`developerConnectGitRepositoryLink` Submodule" id="@cdktn/provider-google.developerConnectGitRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectGitRepositoryLink <a name="DeveloperConnectGitRepositoryLink" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link google_developer_connect_git_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  clone_uri: str,
  git_repository_link_id: str,
  location: str,
  parent_connection: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DeveloperConnectGitRepositoryLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.cloneUri">clone_uri</a></code> | <code>str</code> | Required. Git Clone URI. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.gitRepositoryLinkId">git_repository_link_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.parentConnection">parent_connection</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `clone_uri`<sup>Required</sup> <a name="clone_uri" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.cloneUri"></a>

- *Type:* str

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#clone_uri DeveloperConnectGitRepositoryLink#clone_uri}

---

##### `git_repository_link_id`<sup>Required</sup> <a name="git_repository_link_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.gitRepositoryLinkId"></a>

- *Type:* str

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#git_repository_link_id DeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#location DeveloperConnectGitRepositoryLink#location}

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.parentConnection"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#parent_connection DeveloperConnectGitRepositoryLink#parent_connection}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#annotations DeveloperConnectGitRepositoryLink#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#deletion_policy DeveloperConnectGitRepositoryLink#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.etag"></a>

- *Type:* str

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#etag DeveloperConnectGitRepositoryLink#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#labels DeveloperConnectGitRepositoryLink#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#timeouts DeveloperConnectGitRepositoryLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DeveloperConnectGitRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DeveloperConnectGitRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeveloperConnectGitRepositoryLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeveloperConnectGitRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeveloperConnectGitRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference">DeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUriInput">clone_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput">git_repository_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnectionInput">parent_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUri">clone_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId">git_repository_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnection">parent_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeouts"></a>

```python
timeouts: DeveloperConnectGitRepositoryLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference">DeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `clone_uri_input`<sup>Optional</sup> <a name="clone_uri_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUriInput"></a>

```python
clone_uri_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `git_repository_link_id_input`<sup>Optional</sup> <a name="git_repository_link_id_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput"></a>

```python
git_repository_link_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_connection_input`<sup>Optional</sup> <a name="parent_connection_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnectionInput"></a>

```python
parent_connection_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DeveloperConnectGitRepositoryLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `clone_uri`<sup>Required</sup> <a name="clone_uri" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUri"></a>

```python
clone_uri: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `git_repository_link_id`<sup>Required</sup> <a name="git_repository_link_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId"></a>

```python
git_repository_link_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnection"></a>

```python
parent_connection: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectGitRepositoryLinkConfig <a name="DeveloperConnectGitRepositoryLinkConfig" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  clone_uri: str,
  git_repository_link_id: str,
  location: str,
  parent_connection: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DeveloperConnectGitRepositoryLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.cloneUri">clone_uri</a></code> | <code>str</code> | Required. Git Clone URI. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId">git_repository_link_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.parentConnection">parent_connection</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.etag">etag</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `clone_uri`<sup>Required</sup> <a name="clone_uri" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.cloneUri"></a>

```python
clone_uri: str
```

- *Type:* str

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#clone_uri DeveloperConnectGitRepositoryLink#clone_uri}

---

##### `git_repository_link_id`<sup>Required</sup> <a name="git_repository_link_id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId"></a>

```python
git_repository_link_id: str
```

- *Type:* str

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#git_repository_link_id DeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#location DeveloperConnectGitRepositoryLink#location}

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.parentConnection"></a>

```python
parent_connection: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#parent_connection DeveloperConnectGitRepositoryLink#parent_connection}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#annotations DeveloperConnectGitRepositoryLink#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#deletion_policy DeveloperConnectGitRepositoryLink#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#etag DeveloperConnectGitRepositoryLink#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#labels DeveloperConnectGitRepositoryLink#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.timeouts"></a>

```python
timeouts: DeveloperConnectGitRepositoryLinkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#timeouts DeveloperConnectGitRepositoryLink#timeouts}

---

### DeveloperConnectGitRepositoryLinkTimeouts <a name="DeveloperConnectGitRepositoryLinkTimeouts" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectGitRepositoryLinkTimeoutsOutputReference <a name="DeveloperConnectGitRepositoryLinkTimeoutsOutputReference" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import developer_connect_git_repository_link

developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeveloperConnectGitRepositoryLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

---



