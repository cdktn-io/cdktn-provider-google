# `iapWebForwardingRuleServiceIamBinding` Submodule <a name="`iapWebForwardingRuleServiceIamBinding` Submodule" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebForwardingRuleServiceIamBinding <a name="IapWebForwardingRuleServiceIamBinding" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding google_iap_web_forwarding_rule_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBinding;

IapWebForwardingRuleServiceIamBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .forwardingRuleServiceName(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(IapWebForwardingRuleServiceIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name IapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#members IapWebForwardingRuleServiceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#role IapWebForwardingRuleServiceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#id IapWebForwardingRuleServiceIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#project IapWebForwardingRuleServiceIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.forwardingRuleServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name IapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#members IapWebForwardingRuleServiceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#role IapWebForwardingRuleServiceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#condition IapWebForwardingRuleServiceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#id IapWebForwardingRuleServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#project IapWebForwardingRuleServiceIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.putCondition"></a>

```java
public void putCondition(IapWebForwardingRuleServiceIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isConstruct"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBinding;

IapWebForwardingRuleServiceIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBinding;

IapWebForwardingRuleServiceIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBinding;

IapWebForwardingRuleServiceIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBinding;

IapWebForwardingRuleServiceIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IapWebForwardingRuleServiceIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IapWebForwardingRuleServiceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IapWebForwardingRuleServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IapWebForwardingRuleServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference">IapWebForwardingRuleServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput">forwardingRuleServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.condition"></a>

```java
public IapWebForwardingRuleServiceIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference">IapWebForwardingRuleServiceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.conditionInput"></a>

```java
public IapWebForwardingRuleServiceIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `forwardingRuleServiceNameInput`<sup>Optional</sup> <a name="forwardingRuleServiceNameInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput"></a>

```java
public java.lang.String getForwardingRuleServiceNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName"></a>

```java
public java.lang.String getForwardingRuleServiceName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebForwardingRuleServiceIamBindingCondition <a name="IapWebForwardingRuleServiceIamBindingCondition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.Initializer"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBindingCondition;

IapWebForwardingRuleServiceIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#expression IapWebForwardingRuleServiceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#title IapWebForwardingRuleServiceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#description IapWebForwardingRuleServiceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#expression IapWebForwardingRuleServiceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#title IapWebForwardingRuleServiceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#description IapWebForwardingRuleServiceIamBinding#description}.

---

### IapWebForwardingRuleServiceIamBindingConfig <a name="IapWebForwardingRuleServiceIamBindingConfig" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBindingConfig;

IapWebForwardingRuleServiceIamBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .forwardingRuleServiceName(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(IapWebForwardingRuleServiceIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName">forwardingRuleServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name IapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#members IapWebForwardingRuleServiceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#role IapWebForwardingRuleServiceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#id IapWebForwardingRuleServiceIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#project IapWebForwardingRuleServiceIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `forwardingRuleServiceName`<sup>Required</sup> <a name="forwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName"></a>

```java
public java.lang.String getForwardingRuleServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name IapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#members IapWebForwardingRuleServiceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#role IapWebForwardingRuleServiceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.condition"></a>

```java
public IapWebForwardingRuleServiceIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#condition IapWebForwardingRuleServiceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#id IapWebForwardingRuleServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iap_web_forwarding_rule_service_iam_binding#project IapWebForwardingRuleServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebForwardingRuleServiceIamBindingConditionOutputReference <a name="IapWebForwardingRuleServiceIamBindingConditionOutputReference" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iap_web_forwarding_rule_service_iam_binding.IapWebForwardingRuleServiceIamBindingConditionOutputReference;

new IapWebForwardingRuleServiceIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue"></a>

```java
public IapWebForwardingRuleServiceIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamBinding.IapWebForwardingRuleServiceIamBindingCondition">IapWebForwardingRuleServiceIamBindingCondition</a>

---



