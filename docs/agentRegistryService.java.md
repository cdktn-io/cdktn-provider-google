# `agentRegistryService` Submodule <a name="`agentRegistryService` Submodule" id="@cdktn/provider-google.agentRegistryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistryService <a name="AgentRegistryService" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service google_agent_registry_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryService;

AgentRegistryService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .agentSpec(AgentRegistryServiceAgentSpec)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .endpointSpec(AgentRegistryServiceEndpointSpec)
//  .id(java.lang.String)
//  .interfaces(IResolvable|java.util.List<AgentRegistryServiceInterfaces>)
//  .mcpServerSpec(AgentRegistryServiceMcpServerSpec)
//  .project(java.lang.String)
//  .timeouts(AgentRegistryServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.agentSpec">agentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#id AgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.interfaces">interfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>></code> | interfaces block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.mcpServerSpec">mcpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#project AgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#location AgentRegistryService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#service_id AgentRegistryService#service_id}

---

##### `agentSpec`<sup>Optional</sup> <a name="agentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.agentSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#agent_spec AgentRegistryService#agent_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#deletion_policy AgentRegistryService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#description AgentRegistryService#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#display_name AgentRegistryService#display_name}

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.endpointSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#endpoint_spec AgentRegistryService#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#id AgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaces`<sup>Optional</sup> <a name="interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.interfaces"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>>

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#interfaces AgentRegistryService#interfaces}

---

##### `mcpServerSpec`<sup>Optional</sup> <a name="mcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.mcpServerSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#mcp_server_spec AgentRegistryService#mcp_server_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#project AgentRegistryService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#timeouts AgentRegistryService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec">putAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec">putEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces">putInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec">putMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec">resetAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec">resetEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces">resetInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec">resetMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentSpec` <a name="putAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec"></a>

```java
public void putAgentSpec(AgentRegistryServiceAgentSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putAgentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `putEndpointSpec` <a name="putEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec"></a>

```java
public void putEndpointSpec(AgentRegistryServiceEndpointSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `putInterfaces` <a name="putInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces"></a>

```java
public void putInterfaces(IResolvable|java.util.List<AgentRegistryServiceInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putInterfaces.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>>

---

##### `putMcpServerSpec` <a name="putMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec"></a>

```java
public void putMcpServerSpec(AgentRegistryServiceMcpServerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putMcpServerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts"></a>

```java
public void putTimeouts(AgentRegistryServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---

##### `resetAgentSpec` <a name="resetAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetAgentSpec"></a>

```java
public void resetAgentSpec()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndpointSpec` <a name="resetEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetEndpointSpec"></a>

```java
public void resetEndpointSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetId"></a>

```java
public void resetId()
```

##### `resetInterfaces` <a name="resetInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetInterfaces"></a>

```java
public void resetInterfaces()
```

##### `resetMcpServerSpec` <a name="resetMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetMcpServerSpec"></a>

```java
public void resetMcpServerSpec()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryService;

AgentRegistryService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryService;

AgentRegistryService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryService;

AgentRegistryService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryService;

AgentRegistryService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AgentRegistryService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AgentRegistryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AgentRegistryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AgentRegistryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec">agentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec">mcpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource">registryResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput">agentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput">endpointSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput">interfacesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput">mcpServerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpec`<sup>Required</sup> <a name="agentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpec"></a>

```java
public AgentRegistryServiceAgentSpecOutputReference getAgentSpec();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference">AgentRegistryServiceAgentSpecOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointSpec`<sup>Required</sup> <a name="endpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpec"></a>

```java
public AgentRegistryServiceEndpointSpecOutputReference getEndpointSpec();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference">AgentRegistryServiceEndpointSpecOutputReference</a>

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfaces"></a>

```java
public AgentRegistryServiceInterfacesList getInterfaces();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList">AgentRegistryServiceInterfacesList</a>

---

##### `mcpServerSpec`<sup>Required</sup> <a name="mcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpec"></a>

```java
public AgentRegistryServiceMcpServerSpecOutputReference getMcpServerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference">AgentRegistryServiceMcpServerSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registryResource`<sup>Required</sup> <a name="registryResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.registryResource"></a>

```java
public java.lang.String getRegistryResource();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeouts"></a>

```java
public AgentRegistryServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference">AgentRegistryServiceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `agentSpecInput`<sup>Optional</sup> <a name="agentSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.agentSpecInput"></a>

```java
public AgentRegistryServiceAgentSpec getAgentSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointSpecInput`<sup>Optional</sup> <a name="endpointSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.endpointSpecInput"></a>

```java
public AgentRegistryServiceEndpointSpec getEndpointSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interfacesInput`<sup>Optional</sup> <a name="interfacesInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.interfacesInput"></a>

```java
public IResolvable|java.util.List<AgentRegistryServiceInterfaces> getInterfacesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mcpServerSpecInput`<sup>Optional</sup> <a name="mcpServerSpecInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.mcpServerSpecInput"></a>

```java
public AgentRegistryServiceMcpServerSpec getMcpServerSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.timeoutsInput"></a>

```java
public IResolvable|AgentRegistryServiceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.agentRegistryService.AgentRegistryService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryServiceAgentSpec <a name="AgentRegistryServiceAgentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceAgentSpec;

AgentRegistryServiceAgentSpec.builder()
    .type(java.lang.String)
//  .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content">content</a></code> | <code>java.lang.String</code> | The content of the Agent spec in the JSON format. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Agent spec content. Possible values: ["NO_SPEC", "A2A_AGENT_CARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the Agent spec in the JSON format.

This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceConfig <a name="AgentRegistryServiceConfig" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceConfig;

AgentRegistryServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .agentSpec(AgentRegistryServiceAgentSpec)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .endpointSpec(AgentRegistryServiceEndpointSpec)
//  .id(java.lang.String)
//  .interfaces(IResolvable|java.util.List<AgentRegistryServiceInterfaces>)
//  .mcpServerSpec(AgentRegistryServiceMcpServerSpec)
//  .project(java.lang.String)
//  .timeouts(AgentRegistryServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The name of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec">agentSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | agent_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Service. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined display name for the Service. Can have a maximum length of 63 characters. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#id AgentRegistryService#id}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces">interfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>></code> | interfaces block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec">mcpServerSpec</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | mcp_server_spec block. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#project AgentRegistryService#project}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#location AgentRegistryService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#service_id AgentRegistryService#service_id}

---

##### `agentSpec`<sup>Optional</sup> <a name="agentSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.agentSpec"></a>

```java
public AgentRegistryServiceAgentSpec getAgentSpec();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

agent_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#agent_spec AgentRegistryService#agent_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#deletion_policy AgentRegistryService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#description AgentRegistryService#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-defined display name for the Service. Can have a maximum length of 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#display_name AgentRegistryService#display_name}

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.endpointSpec"></a>

```java
public AgentRegistryServiceEndpointSpec getEndpointSpec();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#endpoint_spec AgentRegistryService#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#id AgentRegistryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaces`<sup>Optional</sup> <a name="interfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.interfaces"></a>

```java
public IResolvable|java.util.List<AgentRegistryServiceInterfaces> getInterfaces();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>>

interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#interfaces AgentRegistryService#interfaces}

---

##### `mcpServerSpec`<sup>Optional</sup> <a name="mcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.mcpServerSpec"></a>

```java
public AgentRegistryServiceMcpServerSpec getMcpServerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

mcp_server_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#mcp_server_spec AgentRegistryService#mcp_server_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#project AgentRegistryService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceConfig.property.timeouts"></a>

```java
public AgentRegistryServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#timeouts AgentRegistryService#timeouts}

---

### AgentRegistryServiceEndpointSpec <a name="AgentRegistryServiceEndpointSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceEndpointSpec;

AgentRegistryServiceEndpointSpec.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Endpoint spec content. Possible values: ["NO_SPEC"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Endpoint spec content. Possible values: ["NO_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

### AgentRegistryServiceInterfaces <a name="AgentRegistryServiceInterfaces" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceInterfaces;

AgentRegistryServiceInterfaces.builder()
    .protocolBinding(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url">url</a></code> | <code>java.lang.String</code> | The destination URL. |

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

The protocol binding of the interface. Possible values: ["JSONRPC", "GRPC", "HTTP_JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#protocol_binding AgentRegistryService#protocol_binding}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The destination URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#url AgentRegistryService#url}

---

### AgentRegistryServiceMcpServerSpec <a name="AgentRegistryServiceMcpServerSpec" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceMcpServerSpec;

AgentRegistryServiceMcpServerSpec.builder()
    .type(java.lang.String)
//  .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type">type</a></code> | <code>java.lang.String</code> | The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"]. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content">content</a></code> | <code>java.lang.String</code> | The content of the MCP Server spec. This payload is validated against the schema for the specified type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the MCP Server spec content. Possible values: ["NO_SPEC", "TOOL_SPEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#type AgentRegistryService#type}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the MCP Server spec. This payload is validated against the schema for the specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#content AgentRegistryService#content}

---

### AgentRegistryServiceTimeouts <a name="AgentRegistryServiceTimeouts" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceTimeouts;

AgentRegistryServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#create AgentRegistryService#create}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#update AgentRegistryService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#create AgentRegistryService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#delete AgentRegistryService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/agent_registry_service#update AgentRegistryService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryServiceAgentSpecOutputReference <a name="AgentRegistryServiceAgentSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceAgentSpecOutputReference;

new AgentRegistryServiceAgentSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpecOutputReference.property.internalValue"></a>

```java
public AgentRegistryServiceAgentSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceAgentSpec">AgentRegistryServiceAgentSpec</a>

---


### AgentRegistryServiceEndpointSpecOutputReference <a name="AgentRegistryServiceEndpointSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceEndpointSpecOutputReference;

new AgentRegistryServiceEndpointSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpecOutputReference.property.internalValue"></a>

```java
public AgentRegistryServiceEndpointSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceEndpointSpec">AgentRegistryServiceEndpointSpec</a>

---


### AgentRegistryServiceInterfacesList <a name="AgentRegistryServiceInterfacesList" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceInterfacesList;

new AgentRegistryServiceInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get"></a>

```java
public AgentRegistryServiceInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AgentRegistryServiceInterfaces> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>>

---


### AgentRegistryServiceInterfacesOutputReference <a name="AgentRegistryServiceInterfacesOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceInterfacesOutputReference;

new AgentRegistryServiceInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput">protocolBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocolBindingInput`<sup>Optional</sup> <a name="protocolBindingInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBindingInput"></a>

```java
public java.lang.String getProtocolBindingInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfacesOutputReference.property.internalValue"></a>

```java
public IResolvable|AgentRegistryServiceInterfaces getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceInterfaces">AgentRegistryServiceInterfaces</a>

---


### AgentRegistryServiceMcpServerSpecOutputReference <a name="AgentRegistryServiceMcpServerSpecOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceMcpServerSpecOutputReference;

new AgentRegistryServiceMcpServerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpecOutputReference.property.internalValue"></a>

```java
public AgentRegistryServiceMcpServerSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceMcpServerSpec">AgentRegistryServiceMcpServerSpec</a>

---


### AgentRegistryServiceTimeoutsOutputReference <a name="AgentRegistryServiceTimeoutsOutputReference" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.agent_registry_service.AgentRegistryServiceTimeoutsOutputReference;

new AgentRegistryServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AgentRegistryServiceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.agentRegistryService.AgentRegistryServiceTimeouts">AgentRegistryServiceTimeouts</a>

---



