# `firebaseAppCheckPlayIntegrityConfig` Submodule <a name="`firebaseAppCheckPlayIntegrityConfig` Submodule" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckPlayIntegrityConfig <a name="FirebaseAppCheckPlayIntegrityConfig" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config google_firebase_app_check_play_integrity_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfig;

FirebaseAppCheckPlayIntegrityConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppCheckPlayIntegrityConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#id FirebaseAppCheckPlayIntegrityConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#project FirebaseAppCheckPlayIntegrityConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#app_id FirebaseAppCheckPlayIntegrityConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#id FirebaseAppCheckPlayIntegrityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#project FirebaseAppCheckPlayIntegrityConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#timeouts FirebaseAppCheckPlayIntegrityConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#token_ttl FirebaseAppCheckPlayIntegrityConfig#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.putTimeouts"></a>

```java
public void putTimeouts(FirebaseAppCheckPlayIntegrityConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseAppCheckPlayIntegrityConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfig;

FirebaseAppCheckPlayIntegrityConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfig;

FirebaseAppCheckPlayIntegrityConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfig;

FirebaseAppCheckPlayIntegrityConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfig;

FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FirebaseAppCheckPlayIntegrityConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirebaseAppCheckPlayIntegrityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirebaseAppCheckPlayIntegrityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckPlayIntegrityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeouts"></a>

```java
public FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput"></a>

```java
public IResolvable|FirebaseAppCheckPlayIntegrityConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput"></a>

```java
public java.lang.String getTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckPlayIntegrityConfigConfig <a name="FirebaseAppCheckPlayIntegrityConfigConfig" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfigConfig;

FirebaseAppCheckPlayIntegrityConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppCheckPlayIntegrityConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#id FirebaseAppCheckPlayIntegrityConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#project FirebaseAppCheckPlayIntegrityConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#app_id FirebaseAppCheckPlayIntegrityConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#id FirebaseAppCheckPlayIntegrityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#project FirebaseAppCheckPlayIntegrityConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts"></a>

```java
public FirebaseAppCheckPlayIntegrityConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#timeouts FirebaseAppCheckPlayIntegrityConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#token_ttl FirebaseAppCheckPlayIntegrityConfig#token_ttl}

---

### FirebaseAppCheckPlayIntegrityConfigTimeouts <a name="FirebaseAppCheckPlayIntegrityConfigTimeouts" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfigTimeouts;

FirebaseAppCheckPlayIntegrityConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#create FirebaseAppCheckPlayIntegrityConfig#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#delete FirebaseAppCheckPlayIntegrityConfig#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#update FirebaseAppCheckPlayIntegrityConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#create FirebaseAppCheckPlayIntegrityConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#delete FirebaseAppCheckPlayIntegrityConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_check_play_integrity_config#update FirebaseAppCheckPlayIntegrityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference <a name="FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_play_integrity_config.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference;

new FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FirebaseAppCheckPlayIntegrityConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---



