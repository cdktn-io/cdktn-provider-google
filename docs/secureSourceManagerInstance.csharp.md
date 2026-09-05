# `secureSourceManagerInstance` Submodule <a name="`secureSourceManagerInstance` Submodule" id="@cdktn/provider-google.secureSourceManagerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerInstance <a name="SecureSourceManagerInstance" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance google_secure_source_manager_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstance(Construct Scope, string Id, SecureSourceManagerInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig">SecureSourceManagerInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig">SecureSourceManagerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig">PutPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig">PutWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetPrivateConfig">ResetPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetWorkforceIdentityFederationConfig">ResetWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateConfig` <a name="PutPrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig"></a>

```csharp
private void PutPrivateConfig(SecureSourceManagerInstancePrivateConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(SecureSourceManagerInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---

##### `PutWorkforceIdentityFederationConfig` <a name="PutWorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig"></a>

```csharp
private void PutWorkforceIdentityFederationConfig(SecureSourceManagerInstanceWorkforceIdentityFederationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPrivateConfig` <a name="ResetPrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetPrivateConfig"></a>

```csharp
private void ResetPrivateConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkforceIdentityFederationConfig` <a name="ResetWorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetWorkforceIdentityFederationConfig"></a>

```csharp
private void ResetWorkforceIdentityFederationConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecureSourceManagerInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecureSourceManagerInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecureSourceManagerInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecureSourceManagerInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecureSourceManagerInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecureSourceManagerInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureSourceManagerInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureSourceManagerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList">SecureSourceManagerInstanceHostConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfig">PrivateConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference">SecureSourceManagerInstancePrivateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.stateNote">StateNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference">SecureSourceManagerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfig">WorkforceIdentityFederationConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfigInput">PrivateConfigInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfigInput">WorkforceIdentityFederationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.hostConfig"></a>

```csharp
public SecureSourceManagerInstanceHostConfigList HostConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList">SecureSourceManagerInstanceHostConfigList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateConfig`<sup>Required</sup> <a name="PrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfig"></a>

```csharp
public SecureSourceManagerInstancePrivateConfigOutputReference PrivateConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference">SecureSourceManagerInstancePrivateConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateNote`<sup>Required</sup> <a name="StateNote" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.stateNote"></a>

```csharp
public string StateNote { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeouts"></a>

```csharp
public SecureSourceManagerInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference">SecureSourceManagerInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkforceIdentityFederationConfig`<sup>Required</sup> <a name="WorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfig"></a>

```csharp
public SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference WorkforceIdentityFederationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrivateConfigInput`<sup>Optional</sup> <a name="PrivateConfigInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfigInput"></a>

```csharp
public SecureSourceManagerInstancePrivateConfig PrivateConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|SecureSourceManagerInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---

##### `WorkforceIdentityFederationConfigInput`<sup>Optional</sup> <a name="WorkforceIdentityFederationConfigInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfigInput"></a>

```csharp
public SecureSourceManagerInstanceWorkforceIdentityFederationConfig WorkforceIdentityFederationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerInstanceConfig <a name="SecureSourceManagerInstanceConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceId,
    string Location,
    string DeletionPolicy = null,
    string Id = null,
    string KmsKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    SecureSourceManagerInstancePrivateConfig PrivateConfig = null,
    string Project = null,
    SecureSourceManagerInstanceTimeouts Timeouts = null,
    SecureSourceManagerInstanceWorkforceIdentityFederationConfig WorkforceIdentityFederationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The name for the Instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.location">Location</a></code> | <code>string</code> | The location for the Instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.privateConfig">PrivateConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig">WorkforceIdentityFederationConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#instance_id SecureSourceManagerInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#location SecureSourceManagerInstance#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#deletion_policy SecureSourceManagerInstance#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#kms_key SecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#labels SecureSourceManagerInstance#labels}

---

##### `PrivateConfig`<sup>Optional</sup> <a name="PrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.privateConfig"></a>

```csharp
public SecureSourceManagerInstancePrivateConfig PrivateConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#private_config SecureSourceManagerInstance#private_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.timeouts"></a>

```csharp
public SecureSourceManagerInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#timeouts SecureSourceManagerInstance#timeouts}

---

##### `WorkforceIdentityFederationConfig`<sup>Optional</sup> <a name="WorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig"></a>

```csharp
public SecureSourceManagerInstanceWorkforceIdentityFederationConfig WorkforceIdentityFederationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#workforce_identity_federation_config SecureSourceManagerInstance#workforce_identity_federation_config}

---

### SecureSourceManagerInstanceHostConfig <a name="SecureSourceManagerInstanceHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceHostConfig {

};
```


### SecureSourceManagerInstancePrivateConfig <a name="SecureSourceManagerInstancePrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstancePrivateConfig {
    bool|IResolvable IsPrivate,
    string CaPool = null,
    SecureSourceManagerInstancePrivateConfigCustomHostConfig CustomHostConfig = null,
    string[] PscAllowedProjects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.isPrivate">IsPrivate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | 'Indicate if it's private instance.'. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.caPool">CaPool</a></code> | <code>string</code> | CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.customHostConfig">CustomHostConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | custom_host_config block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.pscAllowedProjects">PscAllowedProjects</a></code> | <code>string[]</code> | Optional. |

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.isPrivate"></a>

```csharp
public bool|IResolvable IsPrivate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#is_private SecureSourceManagerInstance#is_private}

---

##### `CaPool`<sup>Optional</sup> <a name="CaPool" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#ca_pool SecureSourceManagerInstance#ca_pool}

---

##### `CustomHostConfig`<sup>Optional</sup> <a name="CustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.customHostConfig"></a>

```csharp
public SecureSourceManagerInstancePrivateConfigCustomHostConfig CustomHostConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

custom_host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#custom_host_config SecureSourceManagerInstance#custom_host_config}

---

##### `PscAllowedProjects`<sup>Optional</sup> <a name="PscAllowedProjects" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.pscAllowedProjects"></a>

```csharp
public string[] PscAllowedProjects { get; set; }
```

- *Type:* string[]

Optional.

Additional allowed projects for setting up PSC connections.
Instance host project is automatically allowed and does not need to be included in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#psc_allowed_projects SecureSourceManagerInstance#psc_allowed_projects}

---

### SecureSourceManagerInstancePrivateConfigCustomHostConfig <a name="SecureSourceManagerInstancePrivateConfigCustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstancePrivateConfigCustomHostConfig {
    string Api,
    string GitHttp,
    string GitSsh,
    string Html
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.api">Api</a></code> | <code>string</code> | API hostname. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitHttp">GitHttp</a></code> | <code>string</code> | Git HTTP hostname. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitSsh">GitSsh</a></code> | <code>string</code> | Git SSH hostname. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.html">Html</a></code> | <code>string</code> | HTML hostname. |

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

API hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#api SecureSourceManagerInstance#api}

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitHttp"></a>

```csharp
public string GitHttp { get; set; }
```

- *Type:* string

Git HTTP hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#git_http SecureSourceManagerInstance#git_http}

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitSsh"></a>

```csharp
public string GitSsh { get; set; }
```

- *Type:* string

Git SSH hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#git_ssh SecureSourceManagerInstance#git_ssh}

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.html"></a>

```csharp
public string Html { get; set; }
```

- *Type:* string

HTML hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#html SecureSourceManagerInstance#html}

---

### SecureSourceManagerInstanceTimeouts <a name="SecureSourceManagerInstanceTimeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}.

---

### SecureSourceManagerInstanceWorkforceIdentityFederationConfig <a name="SecureSourceManagerInstanceWorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceWorkforceIdentityFederationConfig {
    bool|IResolvable Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | 'Whether Workforce Identity Federation is enabled.'. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_instance#enabled SecureSourceManagerInstance#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerInstanceHostConfigList <a name="SecureSourceManagerInstanceHostConfigList" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceHostConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get"></a>

```csharp
private SecureSourceManagerInstanceHostConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecureSourceManagerInstanceHostConfigOutputReference <a name="SecureSourceManagerInstanceHostConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceHostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp">GitHttp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh">GitSsh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig">SecureSourceManagerInstanceHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp"></a>

```csharp
public string GitHttp { get; }
```

- *Type:* string

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh"></a>

```csharp
public string GitSsh { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.internalValue"></a>

```csharp
public SecureSourceManagerInstanceHostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig">SecureSourceManagerInstanceHostConfig</a>

---


### SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference <a name="SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttpInput">GitHttpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSshInput">GitSshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.htmlInput">HtmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttp">GitHttp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSsh">GitSsh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `GitHttpInput`<sup>Optional</sup> <a name="GitHttpInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttpInput"></a>

```csharp
public string GitHttpInput { get; }
```

- *Type:* string

---

##### `GitSshInput`<sup>Optional</sup> <a name="GitSshInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSshInput"></a>

```csharp
public string GitSshInput { get; }
```

- *Type:* string

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.htmlInput"></a>

```csharp
public string HtmlInput { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `GitHttp`<sup>Required</sup> <a name="GitHttp" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttp"></a>

```csharp
public string GitHttp { get; }
```

- *Type:* string

---

##### `GitSsh`<sup>Required</sup> <a name="GitSsh" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSsh"></a>

```csharp
public string GitSsh { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.internalValue"></a>

```csharp
public SecureSourceManagerInstancePrivateConfigCustomHostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---


### SecureSourceManagerInstancePrivateConfigOutputReference <a name="SecureSourceManagerInstancePrivateConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstancePrivateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig">PutCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCaPool">ResetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCustomHostConfig">ResetCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetPscAllowedProjects">ResetPscAllowedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHostConfig` <a name="PutCustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig"></a>

```csharp
private void PutCustomHostConfig(SecureSourceManagerInstancePrivateConfigCustomHostConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---

##### `ResetCaPool` <a name="ResetCaPool" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCaPool"></a>

```csharp
private void ResetCaPool()
```

##### `ResetCustomHostConfig` <a name="ResetCustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCustomHostConfig"></a>

```csharp
private void ResetCustomHostConfig()
```

##### `ResetPscAllowedProjects` <a name="ResetPscAllowedProjects" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetPscAllowedProjects"></a>

```csharp
private void ResetPscAllowedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfig">CustomHostConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference">SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment">HttpServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment">SshServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfigInput">CustomHostConfigInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput">IsPrivateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjectsInput">PscAllowedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate">IsPrivate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjects">PscAllowedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHostConfig`<sup>Required</sup> <a name="CustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfig"></a>

```csharp
public SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference CustomHostConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference">SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference</a>

---

##### `HttpServiceAttachment`<sup>Required</sup> <a name="HttpServiceAttachment" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment"></a>

```csharp
public string HttpServiceAttachment { get; }
```

- *Type:* string

---

##### `SshServiceAttachment`<sup>Required</sup> <a name="SshServiceAttachment" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment"></a>

```csharp
public string SshServiceAttachment { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `CustomHostConfigInput`<sup>Optional</sup> <a name="CustomHostConfigInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfigInput"></a>

```csharp
public SecureSourceManagerInstancePrivateConfigCustomHostConfig CustomHostConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---

##### `IsPrivateInput`<sup>Optional</sup> <a name="IsPrivateInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput"></a>

```csharp
public bool|IResolvable IsPrivateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PscAllowedProjectsInput`<sup>Optional</sup> <a name="PscAllowedProjectsInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjectsInput"></a>

```csharp
public string[] PscAllowedProjectsInput { get; }
```

- *Type:* string[]

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate"></a>

```csharp
public bool|IResolvable IsPrivate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PscAllowedProjects`<sup>Required</sup> <a name="PscAllowedProjects" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjects"></a>

```csharp
public string[] PscAllowedProjects { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue"></a>

```csharp
public SecureSourceManagerInstancePrivateConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---


### SecureSourceManagerInstanceTimeoutsOutputReference <a name="SecureSourceManagerInstanceTimeoutsOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecureSourceManagerInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---


### SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference <a name="SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue"></a>

```csharp
public SecureSourceManagerInstanceWorkforceIdentityFederationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---



