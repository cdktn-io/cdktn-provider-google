# `firebaseAppCheckDeviceCheckConfig` Submodule <a name="`firebaseAppCheckDeviceCheckConfig` Submodule" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckDeviceCheckConfig <a name="FirebaseAppCheckDeviceCheckConfig" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config google_firebase_app_check_device_check_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfig;

FirebaseAppCheckDeviceCheckConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .keyId(java.lang.String)
    .privateKey(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppCheckDeviceCheckConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The contents of the private key (.p8) file associated with the key specified by keyId. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#id FirebaseAppCheckDeviceCheckConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#project FirebaseAppCheckDeviceCheckConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#app_id FirebaseAppCheckDeviceCheckConfig#app_id}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#key_id FirebaseAppCheckDeviceCheckConfig#key_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The contents of the private key (.p8) file associated with the key specified by keyId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#private_key FirebaseAppCheckDeviceCheckConfig#private_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#id FirebaseAppCheckDeviceCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#project FirebaseAppCheckDeviceCheckConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#timeouts FirebaseAppCheckDeviceCheckConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#token_ttl FirebaseAppCheckDeviceCheckConfig#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.putTimeouts"></a>

```java
public void putTimeouts(FirebaseAppCheckDeviceCheckConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseAppCheckDeviceCheckConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfig;

FirebaseAppCheckDeviceCheckConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfig;

FirebaseAppCheckDeviceCheckConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfig;

FirebaseAppCheckDeviceCheckConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfig;

FirebaseAppCheckDeviceCheckConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirebaseAppCheckDeviceCheckConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FirebaseAppCheckDeviceCheckConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirebaseAppCheckDeviceCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirebaseAppCheckDeviceCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckDeviceCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.privateKeySet">privateKeySet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateKeySet`<sup>Required</sup> <a name="privateKeySet" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.privateKeySet"></a>

```java
public IResolvable getPrivateKeySet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.timeouts"></a>

```java
public FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.timeoutsInput"></a>

```java
public IResolvable|FirebaseAppCheckDeviceCheckConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput"></a>

```java
public java.lang.String getTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckDeviceCheckConfigConfig <a name="FirebaseAppCheckDeviceCheckConfigConfig" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfigConfig;

FirebaseAppCheckDeviceCheckConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .keyId(java.lang.String)
    .privateKey(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppCheckDeviceCheckConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The contents of the private key (.p8) file associated with the key specified by keyId. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#id FirebaseAppCheckDeviceCheckConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#project FirebaseAppCheckDeviceCheckConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#app_id FirebaseAppCheckDeviceCheckConfig#app_id}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#key_id FirebaseAppCheckDeviceCheckConfig#key_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The contents of the private key (.p8) file associated with the key specified by keyId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#private_key FirebaseAppCheckDeviceCheckConfig#private_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#id FirebaseAppCheckDeviceCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#project FirebaseAppCheckDeviceCheckConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.timeouts"></a>

```java
public FirebaseAppCheckDeviceCheckConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#timeouts FirebaseAppCheckDeviceCheckConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#token_ttl FirebaseAppCheckDeviceCheckConfig#token_ttl}

---

### FirebaseAppCheckDeviceCheckConfigTimeouts <a name="FirebaseAppCheckDeviceCheckConfigTimeouts" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfigTimeouts;

FirebaseAppCheckDeviceCheckConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#create FirebaseAppCheckDeviceCheckConfig#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#delete FirebaseAppCheckDeviceCheckConfig#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#update FirebaseAppCheckDeviceCheckConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#create FirebaseAppCheckDeviceCheckConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#delete FirebaseAppCheckDeviceCheckConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/firebase_app_check_device_check_config#update FirebaseAppCheckDeviceCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference <a name="FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_check_device_check_config.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference;

new FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FirebaseAppCheckDeviceCheckConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppCheckDeviceCheckConfig.FirebaseAppCheckDeviceCheckConfigTimeouts">FirebaseAppCheckDeviceCheckConfigTimeouts</a>

---



