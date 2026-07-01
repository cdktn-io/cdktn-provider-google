# `workstationsWorkstationCluster` Submodule <a name="`workstationsWorkstationCluster` Submodule" id="@cdktn/provider-google.workstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationCluster <a name="WorkstationsWorkstationCluster" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network: str,
  subnetwork: str,
  workstation_cluster_id: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  display_name: str = None,
  domain_config: WorkstationsWorkstationClusterDomainConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  private_cluster_config: WorkstationsWorkstationClusterPrivateClusterConfig = None,
  project: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkstationsWorkstationClusterTimeouts = None,
  workstation_authorization_url: str = None,
  workstation_launch_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.network">network</a></code> | <code>str</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.domainConfig">domain_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.privateClusterConfig">private_cluster_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationAuthorizationUrl">workstation_authorization_url</a></code> | <code>str</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationLaunchUrl">workstation_launch_url</a></code> | <code>str</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.network"></a>

- *Type:* str

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#network WorkstationsWorkstationCluster#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.subnetwork"></a>

- *Type:* str

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#subnetwork WorkstationsWorkstationCluster#subnetwork}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationClusterId"></a>

- *Type:* str

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#workstation_cluster_id WorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#annotations WorkstationsWorkstationCluster#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#deletion_policy WorkstationsWorkstationCluster#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#display_name WorkstationsWorkstationCluster#display_name}

---

##### `domain_config`<sup>Optional</sup> <a name="domain_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.domainConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#domain_config WorkstationsWorkstationCluster#domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#labels WorkstationsWorkstationCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.location"></a>

- *Type:* str

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#location WorkstationsWorkstationCluster#location}

---

##### `private_cluster_config`<sup>Optional</sup> <a name="private_cluster_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.privateClusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#private_cluster_config WorkstationsWorkstationCluster#private_cluster_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#tags WorkstationsWorkstationCluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#timeouts WorkstationsWorkstationCluster#timeouts}

---

##### `workstation_authorization_url`<sup>Optional</sup> <a name="workstation_authorization_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationAuthorizationUrl"></a>

- *Type:* str

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#workstation_authorization_url WorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `workstation_launch_url`<sup>Optional</sup> <a name="workstation_launch_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationLaunchUrl"></a>

- *Type:* str

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#workstation_launch_url WorkstationsWorkstationCluster#workstation_launch_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig">put_domain_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig">put_private_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig">reset_domain_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig">reset_private_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl">reset_workstation_authorization_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl">reset_workstation_launch_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domain_config` <a name="put_domain_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig"></a>

```python
def put_domain_config(
  domain: str
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig.parameter.domain"></a>

- *Type:* str

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#domain WorkstationsWorkstationCluster#domain}

---

##### `put_private_cluster_config` <a name="put_private_cluster_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```python
def put_private_cluster_config(
  enable_private_endpoint: bool | IResolvable,
  allowed_projects: typing.List[str] = None
) -> None
```

###### `enable_private_endpoint`<sup>Required</sup> <a name="enable_private_endpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.enablePrivateEndpoint"></a>

- *Type:* bool | cdktn.IResolvable

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#enable_private_endpoint WorkstationsWorkstationCluster#enable_private_endpoint}

---

###### `allowed_projects`<sup>Optional</sup> <a name="allowed_projects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.allowedProjects"></a>

- *Type:* typing.List[str]

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#allowed_projects WorkstationsWorkstationCluster#allowed_projects}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_domain_config` <a name="reset_domain_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig"></a>

```python
def reset_domain_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_private_cluster_config` <a name="reset_private_cluster_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```python
def reset_private_cluster_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workstation_authorization_url` <a name="reset_workstation_authorization_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl"></a>

```python
def reset_workstation_authorization_url() -> None
```

##### `reset_workstation_launch_url` <a name="reset_workstation_launch_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl"></a>

```python
def reset_workstation_launch_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkstationsWorkstationCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp">control_plane_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded">degraded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig">domain_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig">private_cluster_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput">domain_config_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput">private_cluster_config_input</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput">workstation_authorization_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput">workstation_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput">workstation_launch_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl">workstation_authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl">workstation_launch_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions"></a>

```python
conditions: WorkstationsWorkstationClusterConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a>

---

##### `control_plane_ip`<sup>Required</sup> <a name="control_plane_ip" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```python
control_plane_ip: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded"></a>

```python
degraded: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `domain_config`<sup>Required</sup> <a name="domain_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig"></a>

```python
domain_config: WorkstationsWorkstationClusterDomainConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_cluster_config`<sup>Required</sup> <a name="private_cluster_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```python
private_cluster_config: WorkstationsWorkstationClusterPrivateClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts"></a>

```python
timeouts: WorkstationsWorkstationClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_config_input`<sup>Optional</sup> <a name="domain_config_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput"></a>

```python
domain_config_input: WorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `private_cluster_config_input`<sup>Optional</sup> <a name="private_cluster_config_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```python
private_cluster_config_input: WorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WorkstationsWorkstationClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `workstation_authorization_url_input`<sup>Optional</sup> <a name="workstation_authorization_url_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput"></a>

```python
workstation_authorization_url_input: str
```

- *Type:* str

---

##### `workstation_cluster_id_input`<sup>Optional</sup> <a name="workstation_cluster_id_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```python
workstation_cluster_id_input: str
```

- *Type:* str

---

##### `workstation_launch_url_input`<sup>Optional</sup> <a name="workstation_launch_url_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput"></a>

```python
workstation_launch_url_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workstation_authorization_url`<sup>Required</sup> <a name="workstation_authorization_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl"></a>

```python
workstation_authorization_url: str
```

- *Type:* str

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

---

##### `workstation_launch_url`<sup>Required</sup> <a name="workstation_launch_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl"></a>

```python
workstation_launch_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationClusterConditions <a name="WorkstationsWorkstationClusterConditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions()
```


### WorkstationsWorkstationClusterConfig <a name="WorkstationsWorkstationClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network: str,
  subnetwork: str,
  workstation_cluster_id: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  display_name: str = None,
  domain_config: WorkstationsWorkstationClusterDomainConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  private_cluster_config: WorkstationsWorkstationClusterPrivateClusterConfig = None,
  project: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkstationsWorkstationClusterTimeouts = None,
  workstation_authorization_url: str = None,
  workstation_launch_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network">network</a></code> | <code>str</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig">domain_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location">location</a></code> | <code>str</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig">private_cluster_config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl">workstation_authorization_url</a></code> | <code>str</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl">workstation_launch_url</a></code> | <code>str</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#network WorkstationsWorkstationCluster#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#subnetwork WorkstationsWorkstationCluster#subnetwork}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#workstation_cluster_id WorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#annotations WorkstationsWorkstationCluster#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#deletion_policy WorkstationsWorkstationCluster#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#display_name WorkstationsWorkstationCluster#display_name}

---

##### `domain_config`<sup>Optional</sup> <a name="domain_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```python
domain_config: WorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#domain_config WorkstationsWorkstationCluster#domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#labels WorkstationsWorkstationCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#location WorkstationsWorkstationCluster#location}

---

##### `private_cluster_config`<sup>Optional</sup> <a name="private_cluster_config" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```python
private_cluster_config: WorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#private_cluster_config WorkstationsWorkstationCluster#private_cluster_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#tags WorkstationsWorkstationCluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts"></a>

```python
timeouts: WorkstationsWorkstationClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#timeouts WorkstationsWorkstationCluster#timeouts}

---

##### `workstation_authorization_url`<sup>Optional</sup> <a name="workstation_authorization_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl"></a>

```python
workstation_authorization_url: str
```

- *Type:* str

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#workstation_authorization_url WorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `workstation_launch_url`<sup>Optional</sup> <a name="workstation_launch_url" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl"></a>

```python
workstation_launch_url: str
```

- *Type:* str

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#workstation_launch_url WorkstationsWorkstationCluster#workstation_launch_url}

---

### WorkstationsWorkstationClusterDomainConfig <a name="WorkstationsWorkstationClusterDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig(
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain">domain</a></code> | <code>str</code> | Domain used by Workstations for HTTP ingress. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#domain WorkstationsWorkstationCluster#domain}

---

### WorkstationsWorkstationClusterPrivateClusterConfig <a name="WorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig(
  enable_private_endpoint: bool | IResolvable,
  allowed_projects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">enable_private_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">allowed_projects</a></code> | <code>typing.List[str]</code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `enable_private_endpoint`<sup>Required</sup> <a name="enable_private_endpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```python
enable_private_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#enable_private_endpoint WorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `allowed_projects`<sup>Optional</sup> <a name="allowed_projects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```python
allowed_projects: typing.List[str]
```

- *Type:* typing.List[str]

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#allowed_projects WorkstationsWorkstationCluster#allowed_projects}

---

### WorkstationsWorkstationClusterTimeouts <a name="WorkstationsWorkstationClusterTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationClusterConditionsList <a name="WorkstationsWorkstationClusterConditionsList" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkstationsWorkstationClusterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkstationsWorkstationClusterConditionsOutputReference <a name="WorkstationsWorkstationClusterConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationClusterConditions
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a>

---


### WorkstationsWorkstationClusterDomainConfigOutputReference <a name="WorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationClusterDomainConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---


### WorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="WorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">reset_allowed_projects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_projects` <a name="reset_allowed_projects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```python
def reset_allowed_projects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">cluster_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">service_attachment_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">allowed_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">enable_private_endpoint_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">allowed_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">enable_private_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_hostname`<sup>Required</sup> <a name="cluster_hostname" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```python
cluster_hostname: str
```

- *Type:* str

---

##### `service_attachment_uri`<sup>Required</sup> <a name="service_attachment_uri" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```python
service_attachment_uri: str
```

- *Type:* str

---

##### `allowed_projects_input`<sup>Optional</sup> <a name="allowed_projects_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```python
allowed_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_private_endpoint_input`<sup>Optional</sup> <a name="enable_private_endpoint_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```python
enable_private_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_projects`<sup>Required</sup> <a name="allowed_projects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```python
allowed_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_private_endpoint`<sup>Required</sup> <a name="enable_private_endpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```python
enable_private_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkstationsWorkstationClusterPrivateClusterConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### WorkstationsWorkstationClusterTimeoutsOutputReference <a name="WorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation_cluster

workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---



