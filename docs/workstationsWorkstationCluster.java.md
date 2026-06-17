# `workstationsWorkstationCluster` Submodule <a name="`workstationsWorkstationCluster` Submodule" id="@cdktn/provider-google.workstationsWorkstationCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationCluster <a name="WorkstationsWorkstationCluster" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster google_workstations_workstation_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationCluster;

WorkstationsWorkstationCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .network(java.lang.String)
    .subnetwork(java.lang.String)
    .workstationClusterId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .domainConfig(WorkstationsWorkstationClusterDomainConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .privateClusterConfig(WorkstationsWorkstationClusterPrivateClusterConfig)
//  .project(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkstationsWorkstationClusterTimeouts)
//  .workstationAuthorizationUrl(java.lang.String)
//  .workstationLaunchUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationClusterId">workstationClusterId</a></code> | <code>java.lang.String</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>java.lang.String</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>java.lang.String</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#network WorkstationsWorkstationCluster#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#subnetwork WorkstationsWorkstationCluster#subnetwork}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationClusterId"></a>

- *Type:* java.lang.String

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#workstation_cluster_id WorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#annotations WorkstationsWorkstationCluster#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#deletion_policy WorkstationsWorkstationCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#display_name WorkstationsWorkstationCluster#display_name}

---

##### `domainConfig`<sup>Optional</sup> <a name="domainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.domainConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#domain_config WorkstationsWorkstationCluster#domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#labels WorkstationsWorkstationCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#location WorkstationsWorkstationCluster#location}

---

##### `privateClusterConfig`<sup>Optional</sup> <a name="privateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.privateClusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#private_cluster_config WorkstationsWorkstationCluster#private_cluster_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#tags WorkstationsWorkstationCluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#timeouts WorkstationsWorkstationCluster#timeouts}

---

##### `workstationAuthorizationUrl`<sup>Optional</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationAuthorizationUrl"></a>

- *Type:* java.lang.String

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#workstation_authorization_url WorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `workstationLaunchUrl`<sup>Optional</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.Initializer.parameter.workstationLaunchUrl"></a>

- *Type:* java.lang.String

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#workstation_launch_url WorkstationsWorkstationCluster#workstation_launch_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig">putDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig">putPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig">resetDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig">resetPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl">resetWorkstationAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl">resetWorkstationLaunchUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDomainConfig` <a name="putDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig"></a>

```java
public void putDomainConfig(WorkstationsWorkstationClusterDomainConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `putPrivateClusterConfig` <a name="putPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig"></a>

```java
public void putPrivateClusterConfig(WorkstationsWorkstationClusterPrivateClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putPrivateClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts"></a>

```java
public void putTimeouts(WorkstationsWorkstationClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomainConfig` <a name="resetDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetDomainConfig"></a>

```java
public void resetDomainConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPrivateClusterConfig` <a name="resetPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetPrivateClusterConfig"></a>

```java
public void resetPrivateClusterConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkstationAuthorizationUrl` <a name="resetWorkstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationAuthorizationUrl"></a>

```java
public void resetWorkstationAuthorizationUrl()
```

##### `resetWorkstationLaunchUrl` <a name="resetWorkstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.resetWorkstationLaunchUrl"></a>

```java
public void resetWorkstationLaunchUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isConstruct"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationCluster;

WorkstationsWorkstationCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationCluster;

WorkstationsWorkstationCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationCluster;

WorkstationsWorkstationCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationCluster;

WorkstationsWorkstationCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkstationsWorkstationCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkstationsWorkstationCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkstationsWorkstationCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkstationsWorkstationCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp">controlPlaneIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded">degraded</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput">domainConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput">privateClusterConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput">workstationAuthorizationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput">workstationLaunchUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId">workstationClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.conditions"></a>

```java
public WorkstationsWorkstationClusterConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList">WorkstationsWorkstationClusterConditionsList</a>

---

##### `controlPlaneIp`<sup>Required</sup> <a name="controlPlaneIp" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.controlPlaneIp"></a>

```java
public java.lang.String getControlPlaneIp();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.degraded"></a>

```java
public IResolvable getDegraded();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `domainConfig`<sup>Required</sup> <a name="domainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfig"></a>

```java
public WorkstationsWorkstationClusterDomainConfigOutputReference getDomainConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference">WorkstationsWorkstationClusterDomainConfigOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateClusterConfig`<sup>Required</sup> <a name="privateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfig"></a>

```java
public WorkstationsWorkstationClusterPrivateClusterConfigOutputReference getPrivateClusterConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference">WorkstationsWorkstationClusterPrivateClusterConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeouts"></a>

```java
public WorkstationsWorkstationClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference">WorkstationsWorkstationClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainConfigInput`<sup>Optional</sup> <a name="domainConfigInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.domainConfigInput"></a>

```java
public WorkstationsWorkstationClusterDomainConfig getDomainConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `privateClusterConfigInput`<sup>Optional</sup> <a name="privateClusterConfigInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.privateClusterConfigInput"></a>

```java
public WorkstationsWorkstationClusterPrivateClusterConfig getPrivateClusterConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.timeoutsInput"></a>

```java
public IResolvable|WorkstationsWorkstationClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---

##### `workstationAuthorizationUrlInput`<sup>Optional</sup> <a name="workstationAuthorizationUrlInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrlInput"></a>

```java
public java.lang.String getWorkstationAuthorizationUrlInput();
```

- *Type:* java.lang.String

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterIdInput"></a>

```java
public java.lang.String getWorkstationClusterIdInput();
```

- *Type:* java.lang.String

---

##### `workstationLaunchUrlInput`<sup>Optional</sup> <a name="workstationLaunchUrlInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrlInput"></a>

```java
public java.lang.String getWorkstationLaunchUrlInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workstationAuthorizationUrl`<sup>Required</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationAuthorizationUrl"></a>

```java
public java.lang.String getWorkstationAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationClusterId"></a>

```java
public java.lang.String getWorkstationClusterId();
```

- *Type:* java.lang.String

---

##### `workstationLaunchUrl`<sup>Required</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.workstationLaunchUrl"></a>

```java
public java.lang.String getWorkstationLaunchUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationClusterConditions <a name="WorkstationsWorkstationClusterConditions" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterConditions;

WorkstationsWorkstationClusterConditions.builder()
    .build();
```


### WorkstationsWorkstationClusterConfig <a name="WorkstationsWorkstationClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterConfig;

WorkstationsWorkstationClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .network(java.lang.String)
    .subnetwork(java.lang.String)
    .workstationClusterId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .domainConfig(WorkstationsWorkstationClusterDomainConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .privateClusterConfig(WorkstationsWorkstationClusterPrivateClusterConfig)
//  .project(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkstationsWorkstationClusterTimeouts)
//  .workstationAuthorizationUrl(java.lang.String)
//  .workstationLaunchUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network">network</a></code> | <code>java.lang.String</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>java.lang.String</code> | ID to use for the workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig">domainConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | domain_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the workstation cluster should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig">privateClusterConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | private_cluster_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl">workstationAuthorizationUrl</a></code> | <code>java.lang.String</code> | Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl">workstationLaunchUrl</a></code> | <code>java.lang.String</code> | Specifies the launch URL for workstations in this cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#network WorkstationsWorkstationCluster#network}

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.

Must be part of the subnetwork specified for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#subnetwork WorkstationsWorkstationCluster#subnetwork}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationClusterId"></a>

```java
public java.lang.String getWorkstationClusterId();
```

- *Type:* java.lang.String

ID to use for the workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#workstation_cluster_id WorkstationsWorkstationCluster#workstation_cluster_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#annotations WorkstationsWorkstationCluster#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#deletion_policy WorkstationsWorkstationCluster#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#display_name WorkstationsWorkstationCluster#display_name}

---

##### `domainConfig`<sup>Optional</sup> <a name="domainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.domainConfig"></a>

```java
public WorkstationsWorkstationClusterDomainConfig getDomainConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#domain_config WorkstationsWorkstationCluster#domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#id WorkstationsWorkstationCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#labels WorkstationsWorkstationCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the workstation cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#location WorkstationsWorkstationCluster#location}

---

##### `privateClusterConfig`<sup>Optional</sup> <a name="privateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.privateClusterConfig"></a>

```java
public WorkstationsWorkstationClusterPrivateClusterConfig getPrivateClusterConfig();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

private_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#private_cluster_config WorkstationsWorkstationCluster#private_cluster_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#project WorkstationsWorkstationCluster#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#tags WorkstationsWorkstationCluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.timeouts"></a>

```java
public WorkstationsWorkstationClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#timeouts WorkstationsWorkstationCluster#timeouts}

---

##### `workstationAuthorizationUrl`<sup>Optional</sup> <a name="workstationAuthorizationUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationAuthorizationUrl"></a>

```java
public java.lang.String getWorkstationAuthorizationUrl();
```

- *Type:* java.lang.String

Specifies the redirect URL for unauthorized requests received by workstation VMs in this cluster.

Redirects to this endpoint will send a base64 encoded 'state' query param containing the target workstation name and original request hostname. The endpoint is responsible for retrieving a token using 'GenerateAccessToken' and redirecting back to the original hostname with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#workstation_authorization_url WorkstationsWorkstationCluster#workstation_authorization_url}

---

##### `workstationLaunchUrl`<sup>Optional</sup> <a name="workstationLaunchUrl" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConfig.property.workstationLaunchUrl"></a>

```java
public java.lang.String getWorkstationLaunchUrl();
```

- *Type:* java.lang.String

Specifies the launch URL for workstations in this cluster.

Requests sent to unstarted workstations will be redirected to this URL.
Requests redirected to the launch endpoint will be sent with a 'workstation' query parameter containing the full workstation resource. The launch endpoint is responsible for starting the workstation, polling it until it reaches 'STATE_RUNNING', and then issuing a redirect to the workstation's host URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#workstation_launch_url WorkstationsWorkstationCluster#workstation_launch_url}

---

### WorkstationsWorkstationClusterDomainConfig <a name="WorkstationsWorkstationClusterDomainConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterDomainConfig;

WorkstationsWorkstationClusterDomainConfig.builder()
    .domain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Domain used by Workstations for HTTP ingress. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Domain used by Workstations for HTTP ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#domain WorkstationsWorkstationCluster#domain}

---

### WorkstationsWorkstationClusterPrivateClusterConfig <a name="WorkstationsWorkstationClusterPrivateClusterConfig" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterPrivateClusterConfig;

WorkstationsWorkstationClusterPrivateClusterConfig.builder()
    .enablePrivateEndpoint(java.lang.Boolean|IResolvable)
//  .allowedProjects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Workstations endpoint is private. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects">allowedProjects</a></code> | <code>java.util.List<java.lang.String></code> | Additional project IDs that are allowed to attach to the workstation cluster's service attachment. |

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.enablePrivateEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Workstations endpoint is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#enable_private_endpoint WorkstationsWorkstationCluster#enable_private_endpoint}

---

##### `allowedProjects`<sup>Optional</sup> <a name="allowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig.property.allowedProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedProjects();
```

- *Type:* java.util.List<java.lang.String>

Additional project IDs that are allowed to attach to the workstation cluster's service attachment.

By default, the workstation cluster's project and the VPC host project (if different) are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#allowed_projects WorkstationsWorkstationCluster#allowed_projects}

---

### WorkstationsWorkstationClusterTimeouts <a name="WorkstationsWorkstationClusterTimeouts" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterTimeouts;

WorkstationsWorkstationClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#create WorkstationsWorkstationCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#delete WorkstationsWorkstationCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/workstations_workstation_cluster#update WorkstationsWorkstationCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationClusterConditionsList <a name="WorkstationsWorkstationClusterConditionsList" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterConditionsList;

new WorkstationsWorkstationClusterConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get"></a>

```java
public WorkstationsWorkstationClusterConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WorkstationsWorkstationClusterConditionsOutputReference <a name="WorkstationsWorkstationClusterConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterConditionsOutputReference;

new WorkstationsWorkstationClusterConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details">details</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditionsOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationClusterConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterConditions">WorkstationsWorkstationClusterConditions</a>

---


### WorkstationsWorkstationClusterDomainConfigOutputReference <a name="WorkstationsWorkstationClusterDomainConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterDomainConfigOutputReference;

new WorkstationsWorkstationClusterDomainConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfigOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationClusterDomainConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterDomainConfig">WorkstationsWorkstationClusterDomainConfig</a>

---


### WorkstationsWorkstationClusterPrivateClusterConfigOutputReference <a name="WorkstationsWorkstationClusterPrivateClusterConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference;

new WorkstationsWorkstationClusterPrivateClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects">resetAllowedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedProjects` <a name="resetAllowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.resetAllowedProjects"></a>

```java
public void resetAllowedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname">clusterHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri">serviceAttachmentUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput">allowedProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput">enablePrivateEndpointInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects">allowedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterHostname`<sup>Required</sup> <a name="clusterHostname" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.clusterHostname"></a>

```java
public java.lang.String getClusterHostname();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentUri`<sup>Required</sup> <a name="serviceAttachmentUri" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.serviceAttachmentUri"></a>

```java
public java.lang.String getServiceAttachmentUri();
```

- *Type:* java.lang.String

---

##### `allowedProjectsInput`<sup>Optional</sup> <a name="allowedProjectsInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjectsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enablePrivateEndpointInput`<sup>Optional</sup> <a name="enablePrivateEndpointInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpointInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateEndpointInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedProjects`<sup>Required</sup> <a name="allowedProjects" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.allowedProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.enablePrivateEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfigOutputReference.property.internalValue"></a>

```java
public WorkstationsWorkstationClusterPrivateClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterPrivateClusterConfig">WorkstationsWorkstationClusterPrivateClusterConfig</a>

---


### WorkstationsWorkstationClusterTimeoutsOutputReference <a name="WorkstationsWorkstationClusterTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.workstations_workstation_cluster.WorkstationsWorkstationClusterTimeoutsOutputReference;

new WorkstationsWorkstationClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkstationsWorkstationClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.workstationsWorkstationCluster.WorkstationsWorkstationClusterTimeouts">WorkstationsWorkstationClusterTimeouts</a>

---



