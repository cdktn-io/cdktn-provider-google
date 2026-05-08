# `firebaseAppHostingDefaultDomain` Submodule <a name="`firebaseAppHostingDefaultDomain` Submodule" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingDefaultDomain <a name="FirebaseAppHostingDefaultDomain" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain google_firebase_app_hosting_default_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomain;

FirebaseAppHostingDefaultDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .domainId(java.lang.String)
    .location(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppHostingDefaultDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#backend FirebaseAppHostingDefaultDomain#backend}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#domain_id FirebaseAppHostingDefaultDomain#domain_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#location FirebaseAppHostingDefaultDomain#location}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#disabled FirebaseAppHostingDefaultDomain#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#timeouts FirebaseAppHostingDefaultDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts"></a>

```java
public void putTimeouts(FirebaseAppHostingDefaultDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseAppHostingDefaultDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomain;

FirebaseAppHostingDefaultDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomain;

FirebaseAppHostingDefaultDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomain;

FirebaseAppHostingDefaultDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomain;

FirebaseAppHostingDefaultDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirebaseAppHostingDefaultDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FirebaseAppHostingDefaultDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirebaseAppHostingDefaultDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirebaseAppHostingDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference">FirebaseAppHostingDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeouts"></a>

```java
public FirebaseAppHostingDefaultDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference">FirebaseAppHostingDefaultDomainTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeoutsInput"></a>

```java
public IResolvable|FirebaseAppHostingDefaultDomainTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingDefaultDomainConfig <a name="FirebaseAppHostingDefaultDomainConfig" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomainConfig;

FirebaseAppHostingDefaultDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .domainId(java.lang.String)
    .location(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppHostingDefaultDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#backend FirebaseAppHostingDefaultDomain#backend}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#domain_id FirebaseAppHostingDefaultDomain#domain_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#location FirebaseAppHostingDefaultDomain#location}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#disabled FirebaseAppHostingDefaultDomain#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.timeouts"></a>

```java
public FirebaseAppHostingDefaultDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#timeouts FirebaseAppHostingDefaultDomain#timeouts}

---

### FirebaseAppHostingDefaultDomainTimeouts <a name="FirebaseAppHostingDefaultDomainTimeouts" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomainTimeouts;

FirebaseAppHostingDefaultDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingDefaultDomainTimeoutsOutputReference <a name="FirebaseAppHostingDefaultDomainTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_default_domain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference;

new FirebaseAppHostingDefaultDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FirebaseAppHostingDefaultDomainTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

---



