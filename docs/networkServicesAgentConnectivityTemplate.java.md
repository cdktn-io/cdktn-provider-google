# `networkServicesAgentConnectivityTemplate` Submodule <a name="`networkServicesAgentConnectivityTemplate` Submodule" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAgentConnectivityTemplate <a name="NetworkServicesAgentConnectivityTemplate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template google_network_services_agent_connectivity_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplate;

NetworkServicesAgentConnectivityTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPath(java.lang.String)
    .agentConnectivityTemplateId(java.lang.String)
    .location(java.lang.String)
//  .accessTypes(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .egressNetworkConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesAgentConnectivityTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath">accessPath</a></code> | <code>java.lang.String</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>java.lang.String</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes">accessTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessPath"></a>

- *Type:* java.lang.String

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.agentConnectivityTemplateId"></a>

- *Type:* java.lang.String

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}

---

##### `accessTypes`<sup>Optional</sup> <a name="accessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.accessTypes"></a>

- *Type:* java.util.List<java.lang.String>

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}

---

##### `egressNetworkConfig`<sup>Optional</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.egressNetworkConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig">putEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes">resetAccessTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig">resetEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressNetworkConfig` <a name="putEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig"></a>

```java
public void putEgressNetworkConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putEgressNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesAgentConnectivityTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `resetAccessTypes` <a name="resetAccessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetAccessTypes"></a>

```java
public void resetAccessTypes()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEgressNetworkConfig` <a name="resetEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetEgressNetworkConfig"></a>

```java
public void resetEgressNetworkConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplate;

NetworkServicesAgentConnectivityTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplate;

NetworkServicesAgentConnectivityTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplate;

NetworkServicesAgentConnectivityTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplate;

NetworkServicesAgentConnectivityTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesAgentConnectivityTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkServicesAgentConnectivityTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesAgentConnectivityTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesAgentConnectivityTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesAgentConnectivityTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput">accessPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput">accessTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput">agentConnectivityTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput">egressNetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath">accessPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes">accessTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `egressNetworkConfig`<sup>Required</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfig"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference getEgressNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeouts"></a>

```java
public NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference">NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessPathInput`<sup>Optional</sup> <a name="accessPathInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPathInput"></a>

```java
public java.lang.String getAccessPathInput();
```

- *Type:* java.lang.String

---

##### `accessTypesInput`<sup>Optional</sup> <a name="accessTypesInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypesInput"></a>

```java
public java.util.List<java.lang.String> getAccessTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentConnectivityTemplateIdInput`<sup>Optional</sup> <a name="agentConnectivityTemplateIdInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateIdInput"></a>

```java
public java.lang.String getAgentConnectivityTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `egressNetworkConfigInput`<sup>Optional</sup> <a name="egressNetworkConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.egressNetworkConfigInput"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfig getEgressNetworkConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.timeoutsInput"></a>

```java
public IResolvable|NetworkServicesAgentConnectivityTemplateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessPath"></a>

```java
public java.lang.String getAccessPath();
```

- *Type:* java.lang.String

---

##### `accessTypes`<sup>Required</sup> <a name="accessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.accessTypes"></a>

```java
public java.util.List<java.lang.String> getAccessTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.agentConnectivityTemplateId"></a>

```java
public java.lang.String getAgentConnectivityTemplateId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAgentConnectivityTemplateConfig <a name="NetworkServicesAgentConnectivityTemplateConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateConfig;

NetworkServicesAgentConnectivityTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPath(java.lang.String)
    .agentConnectivityTemplateId(java.lang.String)
    .location(java.lang.String)
//  .accessTypes(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .egressNetworkConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesAgentConnectivityTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath">accessPath</a></code> | <code>java.lang.String</code> | The path of the access. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId">agentConnectivityTemplateId</a></code> | <code>java.lang.String</code> | Short name of the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the AgentConnectivityTemplate. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes">accessTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig">egressNetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | egress_network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AgentConnectivityTemplate resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPath`<sup>Required</sup> <a name="accessPath" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessPath"></a>

```java
public java.lang.String getAccessPath();
```

- *Type:* java.lang.String

The path of the access.

The path is immutable once set. Exactly one path can be set. Possible values: ["CLIENT_TO_AGENT", "AGENT_TO_ANYWHERE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_path NetworkServicesAgentConnectivityTemplate#access_path}

---

##### `agentConnectivityTemplateId`<sup>Required</sup> <a name="agentConnectivityTemplateId" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.agentConnectivityTemplateId"></a>

```java
public java.lang.String getAgentConnectivityTemplateId();
```

- *Type:* java.lang.String

Short name of the AgentConnectivityTemplate resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#agent_connectivity_template_id NetworkServicesAgentConnectivityTemplate#agent_connectivity_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the AgentConnectivityTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#location NetworkServicesAgentConnectivityTemplate#location}

---

##### `accessTypes`<sup>Optional</sup> <a name="accessTypes" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.accessTypes"></a>

```java
public java.util.List<java.lang.String> getAccessTypes();
```

- *Type:* java.util.List<java.lang.String>

The types of network access provided to the gateway. Both PUBLIC and PRIVATE can be configured. Possible values: ["PUBLIC", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#access_types NetworkServicesAgentConnectivityTemplate#access_types}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#deletion_policy NetworkServicesAgentConnectivityTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#description NetworkServicesAgentConnectivityTemplate#description}

---

##### `egressNetworkConfig`<sup>Optional</sup> <a name="egressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.egressNetworkConfig"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfig getEgressNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

egress_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#egress_network_config NetworkServicesAgentConnectivityTemplate#egress_network_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#id NetworkServicesAgentConnectivityTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AgentConnectivityTemplate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#labels NetworkServicesAgentConnectivityTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#project NetworkServicesAgentConnectivityTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateConfig.property.timeouts"></a>

```java
public NetworkServicesAgentConnectivityTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#timeouts NetworkServicesAgentConnectivityTemplate#timeouts}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig;

NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.builder()
//  .dnsPeeringConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig)
//  .networkAttachment(java.lang.String)
//  .tlsConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig)
//  .vpcEgress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress">vpcEgress</a></code> | <code>java.lang.String</code> | The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `dnsPeeringConfig`<sup>Optional</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.dnsPeeringConfig"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig getDnsPeeringConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#dns_peering_config NetworkServicesAgentConnectivityTemplate#dns_peering_config}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

The network attachment resource name. Format: projects/{project}/regions/{region}/networkAttachments/{network_attachment_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#network_attachment NetworkServicesAgentConnectivityTemplate#network_attachment}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.tlsConfig"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#tls_config NetworkServicesAgentConnectivityTemplate#tls_config}

---

##### `vpcEgress`<sup>Optional</sup> <a name="vpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig.property.vpcEgress"></a>

```java
public java.lang.String getVpcEgress();
```

- *Type:* java.lang.String

The VPC egress setting. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#vpc_egress NetworkServicesAgentConnectivityTemplate#vpc_egress}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig;

NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.builder()
    .targetNetwork(java.lang.String)
//  .domain(java.lang.String)
//  .domains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain name to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The list of domain names to peer for DNS resolution. |

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#target_network NetworkServicesAgentConnectivityTemplate#target_network}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain name to peer for DNS resolution.

Must be a fully
qualified domain name ending with a dot (for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domain NetworkServicesAgentConnectivityTemplate#domain}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.'). At least one domain must be
specified between 'domain' and 'domains'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#domains NetworkServicesAgentConnectivityTemplate#domains}

---

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig;

NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.builder()
    .additionalRoots(java.lang.String)
//  .trustConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots">additionalRoots</a></code> | <code>java.lang.String</code> | Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}. |

---

##### `additionalRoots`<sup>Required</sup> <a name="additionalRoots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.additionalRoots"></a>

```java
public java.lang.String getAdditionalRoots();
```

- *Type:* java.lang.String

Defines whether additional roots should be trusted. Possible values: ["NO_ADDITIONAL_ROOTS", "PUBLICLY_TRUSTED_ROOTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#additional_roots NetworkServicesAgentConnectivityTemplate#additional_roots}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

The trust config resource name. Format: projects/{project}/locations/{location}/trustConfigs/{trust_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#trust_config NetworkServicesAgentConnectivityTemplate#trust_config}

---

### NetworkServicesAgentConnectivityTemplateTimeouts <a name="NetworkServicesAgentConnectivityTemplateTimeouts" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateTimeouts;

NetworkServicesAgentConnectivityTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#create NetworkServicesAgentConnectivityTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#delete NetworkServicesAgentConnectivityTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_services_agent_connectivity_template#update NetworkServicesAgentConnectivityTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains">resetDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomains` <a name="resetDomains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.resetDomains"></a>

```java
public void resetDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```java
public java.lang.String getTargetNetworkInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig">putDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig">resetDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress">resetVpcEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfig` <a name="putDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```java
public void putDnsPeeringConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `resetDnsPeeringConfig` <a name="resetDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```java
public void resetDnsPeeringConfig()
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

##### `resetVpcEgress` <a name="resetVpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.resetVpcEgress"></a>

```java
public void resetVpcEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput">dnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput">vpcEgressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress">vpcEgress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsPeeringConfig`<sup>Required</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference getDnsPeeringConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfig"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference</a>

---

##### `dnsPeeringConfigInput`<sup>Optional</sup> <a name="dnsPeeringConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig getDnsPeeringConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigDnsPeeringConfig</a>

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.tlsConfigInput"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---

##### `vpcEgressInput`<sup>Optional</sup> <a name="vpcEgressInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgressInput"></a>

```java
public java.lang.String getVpcEgressInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `vpcEgress`<sup>Required</sup> <a name="vpcEgress" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.vpcEgress"></a>

```java
public java.lang.String getVpcEgress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfig</a>

---


### NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference <a name="NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference;

new NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.resetTrustConfig"></a>

```java
public void resetTrustConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput">additionalRootsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput">trustConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots">additionalRoots</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalRootsInput`<sup>Optional</sup> <a name="additionalRootsInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRootsInput"></a>

```java
public java.lang.String getAdditionalRootsInput();
```

- *Type:* java.lang.String

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfigInput"></a>

```java
public java.lang.String getTrustConfigInput();
```

- *Type:* java.lang.String

---

##### `additionalRoots`<sup>Required</sup> <a name="additionalRoots" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.additionalRoots"></a>

```java
public java.lang.String getAdditionalRoots();
```

- *Type:* java.lang.String

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig">NetworkServicesAgentConnectivityTemplateEgressNetworkConfigTlsConfig</a>

---


### NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference <a name="NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.network_services_agent_connectivity_template.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference;

new NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkServicesAgentConnectivityTemplateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesAgentConnectivityTemplate.NetworkServicesAgentConnectivityTemplateTimeouts">NetworkServicesAgentConnectivityTemplateTimeouts</a>

---



