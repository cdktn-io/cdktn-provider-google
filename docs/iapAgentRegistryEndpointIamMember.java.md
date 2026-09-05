# `iapAgentRegistryEndpointIamMember` Submodule <a name="`iapAgentRegistryEndpointIamMember` Submodule" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryEndpointIamMember <a name="IapAgentRegistryEndpointIamMember" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member google_iap_agent_registry_endpoint_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMember;

IapAgentRegistryEndpointIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(IapAgentRegistryEndpointIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#endpoint_id IapAgentRegistryEndpointIamMember#endpoint_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#member IapAgentRegistryEndpointIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#role IapAgentRegistryEndpointIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#id IapAgentRegistryEndpointIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#location IapAgentRegistryEndpointIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#project IapAgentRegistryEndpointIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.endpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#endpoint_id IapAgentRegistryEndpointIamMember#endpoint_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#member IapAgentRegistryEndpointIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#role IapAgentRegistryEndpointIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#condition IapAgentRegistryEndpointIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#id IapAgentRegistryEndpointIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#location IapAgentRegistryEndpointIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#project IapAgentRegistryEndpointIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.putCondition"></a>

```java
public void putCondition(IapAgentRegistryEndpointIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IapAgentRegistryEndpointIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMember;

IapAgentRegistryEndpointIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMember;

IapAgentRegistryEndpointIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMember;

IapAgentRegistryEndpointIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMember;

IapAgentRegistryEndpointIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IapAgentRegistryEndpointIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IapAgentRegistryEndpointIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IapAgentRegistryEndpointIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IapAgentRegistryEndpointIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryEndpointIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference">IapAgentRegistryEndpointIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.condition"></a>

```java
public IapAgentRegistryEndpointIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference">IapAgentRegistryEndpointIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.conditionInput"></a>

```java
public IapAgentRegistryEndpointIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryEndpointIamMemberCondition <a name="IapAgentRegistryEndpointIamMemberCondition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMemberCondition;

IapAgentRegistryEndpointIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#expression IapAgentRegistryEndpointIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#title IapAgentRegistryEndpointIamMember#title}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#description IapAgentRegistryEndpointIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#expression IapAgentRegistryEndpointIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#title IapAgentRegistryEndpointIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#description IapAgentRegistryEndpointIamMember#description}.

---

### IapAgentRegistryEndpointIamMemberConfig <a name="IapAgentRegistryEndpointIamMemberConfig" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMemberConfig;

IapAgentRegistryEndpointIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(IapAgentRegistryEndpointIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#endpoint_id IapAgentRegistryEndpointIamMember#endpoint_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#member IapAgentRegistryEndpointIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#role IapAgentRegistryEndpointIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#id IapAgentRegistryEndpointIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#location IapAgentRegistryEndpointIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#project IapAgentRegistryEndpointIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#endpoint_id IapAgentRegistryEndpointIamMember#endpoint_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#member IapAgentRegistryEndpointIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#role IapAgentRegistryEndpointIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.condition"></a>

```java
public IapAgentRegistryEndpointIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#condition IapAgentRegistryEndpointIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#id IapAgentRegistryEndpointIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#location IapAgentRegistryEndpointIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#project IapAgentRegistryEndpointIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAgentRegistryEndpointIamMemberConditionOutputReference <a name="IapAgentRegistryEndpointIamMemberConditionOutputReference" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iap_agent_registry_endpoint_iam_member.IapAgentRegistryEndpointIamMemberConditionOutputReference;

new IapAgentRegistryEndpointIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.internalValue"></a>

```java
public IapAgentRegistryEndpointIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

---



