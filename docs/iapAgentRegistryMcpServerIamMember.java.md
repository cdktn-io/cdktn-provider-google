# `iapAgentRegistryMcpServerIamMember` Submodule <a name="`iapAgentRegistryMcpServerIamMember` Submodule" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryMcpServerIamMember <a name="IapAgentRegistryMcpServerIamMember" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member google_iap_agent_registry_mcp_server_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMember;

IapAgentRegistryMcpServerIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServerId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(IapAgentRegistryMcpServerIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.mcpServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#condition IapAgentRegistryMcpServerIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition"></a>

```java
public void putCondition(IapAgentRegistryMcpServerIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IapAgentRegistryMcpServerIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMember;

IapAgentRegistryMcpServerIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMember;

IapAgentRegistryMcpServerIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMember;

IapAgentRegistryMcpServerIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMember;

IapAgentRegistryMcpServerIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IapAgentRegistryMcpServerIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IapAgentRegistryMcpServerIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IapAgentRegistryMcpServerIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IapAgentRegistryMcpServerIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryMcpServerIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference">IapAgentRegistryMcpServerIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerIdInput">mcpServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.condition"></a>

```java
public IapAgentRegistryMcpServerIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference">IapAgentRegistryMcpServerIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.conditionInput"></a>

```java
public IapAgentRegistryMcpServerIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mcpServerIdInput`<sup>Optional</sup> <a name="mcpServerIdInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerIdInput"></a>

```java
public java.lang.String getMcpServerIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryMcpServerIamMemberCondition <a name="IapAgentRegistryMcpServerIamMemberCondition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMemberCondition;

IapAgentRegistryMcpServerIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#expression IapAgentRegistryMcpServerIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#title IapAgentRegistryMcpServerIamMember#title}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#description IapAgentRegistryMcpServerIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#expression IapAgentRegistryMcpServerIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#title IapAgentRegistryMcpServerIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#description IapAgentRegistryMcpServerIamMember#description}.

---

### IapAgentRegistryMcpServerIamMemberConfig <a name="IapAgentRegistryMcpServerIamMemberConfig" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMemberConfig;

IapAgentRegistryMcpServerIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServerId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(IapAgentRegistryMcpServerIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#mcp_server_id IapAgentRegistryMcpServerIamMember#mcp_server_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#member IapAgentRegistryMcpServerIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#role IapAgentRegistryMcpServerIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.condition"></a>

```java
public IapAgentRegistryMcpServerIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#condition IapAgentRegistryMcpServerIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#id IapAgentRegistryMcpServerIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#location IapAgentRegistryMcpServerIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_member#project IapAgentRegistryMcpServerIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAgentRegistryMcpServerIamMemberConditionOutputReference <a name="IapAgentRegistryMcpServerIamMemberConditionOutputReference" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_mcp_server_iam_member.IapAgentRegistryMcpServerIamMemberConditionOutputReference;

new IapAgentRegistryMcpServerIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberConditionOutputReference.property.internalValue"></a>

```java
public IapAgentRegistryMcpServerIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamMember.IapAgentRegistryMcpServerIamMemberCondition">IapAgentRegistryMcpServerIamMemberCondition</a>

---



