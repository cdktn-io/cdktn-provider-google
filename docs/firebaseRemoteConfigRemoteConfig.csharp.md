# `firebaseRemoteConfigRemoteConfig` Submodule <a name="`firebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseRemoteConfigRemoteConfig <a name="FirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfig(Construct Scope, string Id, FirebaseRemoteConfigRemoteConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig">FirebaseRemoteConfigRemoteConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig">FirebaseRemoteConfigRemoteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups">PutParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameterGroups">ResetParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions"></a>

```csharp
private void PutConditions(IResolvable|FirebaseRemoteConfigRemoteConfigConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]

---

##### `PutParameterGroups` <a name="PutParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```csharp
private void PutParameterGroups(IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters"></a>

```csharp
private void PutParameters(IResolvable|FirebaseRemoteConfigRemoteConfigParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(FirebaseRemoteConfigRemoteConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameterGroups` <a name="ResetParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```csharp
private void ResetParameterGroups()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

FirebaseRemoteConfigRemoteConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

FirebaseRemoteConfigRemoteConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

FirebaseRemoteConfigRemoteConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

FirebaseRemoteConfigRemoteConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseRemoteConfigRemoteConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList">FirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroups">ParameterGroups</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList">FirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList">FirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.version">Version</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList">FirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">ParameterGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList">FirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterGroups`<sup>Required</sup> <a name="ParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsList ParameterGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList">FirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList">FirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.version"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigVersionList Version { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList">FirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterGroupsInput`<sup>Optional</sup> <a name="ParameterGroupsInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroups[] ParameterGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseRemoteConfigRemoteConfigConditions <a name="FirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigConditions {
    string Expression,
    string Name,
    string TagColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.expression">Expression</a></code> | <code>string</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.name">Name</a></code> | <code>string</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.tagColor">TagColor</a></code> | <code>string</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#expression FirebaseRemoteConfigRemoteConfig#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#name FirebaseRemoteConfigRemoteConfig#name}

---

##### `TagColor`<sup>Optional</sup> <a name="TagColor" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```csharp
public string TagColor { get; set; }
```

- *Type:* string

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#tag_color FirebaseRemoteConfigRemoteConfig#tag_color}

---

### FirebaseRemoteConfigRemoteConfigConfig <a name="FirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|FirebaseRemoteConfigRemoteConfigConditions[] Conditions = null,
    string Id = null,
    IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroups[] ParameterGroups = null,
    IResolvable|FirebaseRemoteConfigRemoteConfigParameters[] Parameters = null,
    string Project = null,
    FirebaseRemoteConfigRemoteConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">ParameterGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#conditions FirebaseRemoteConfigRemoteConfig#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterGroups`<sup>Optional</sup> <a name="ParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroups[] ParameterGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_groups FirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#timeouts FirebaseRemoteConfigRemoteConfig#timeouts}

---

### FirebaseRemoteConfigRemoteConfigParameterGroups <a name="FirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroups {
    string ParameterGroupName,
    string Description = null,
    IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.description">Description</a></code> | <code>string</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]</code> | parameters block. |

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParameters {
    string ParameterName,
    IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] ConditionalValues = null,
    FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue DefaultValue = null,
    string Description = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">ParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">ConditionalValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">Description</a></code> | <code>string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">ValueType</a></code> | <code>string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `ConditionalValues`<sup>Optional</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] ConditionalValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue DefaultValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues {
    string ConditionName,
    bool|IResolvable UseInAppDefault = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">ConditionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">Value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```csharp
public string ConditionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue {
    bool|IResolvable UseInAppDefault = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">Value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParameters <a name="FirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameters {
    string ParameterName,
    IResolvable|FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] ConditionalValues = null,
    FirebaseRemoteConfigRemoteConfigParametersDefaultValue DefaultValue = null,
    string Description = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.parameterName">ParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">ConditionalValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.description">Description</a></code> | <code>string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.valueType">ValueType</a></code> | <code>string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `ConditionalValues`<sup>Optional</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] ConditionalValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParametersDefaultValue DefaultValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}

---

### FirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersConditionalValues {
    string ConditionName,
    bool|IResolvable UseInAppDefault = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">ConditionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">Value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```csharp
public string ConditionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="FirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersDefaultValue {
    bool|IResolvable UseInAppDefault = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">Value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigTimeouts <a name="FirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}.

---

### FirebaseRemoteConfigRemoteConfigVersion <a name="FirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigVersion {

};
```


### FirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigVersionUpdateUser {

};
```


## Classes <a name="Classes" id="Classes"></a>

### FirebaseRemoteConfigRemoteConfigConditionsList <a name="FirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>[]

---


### FirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="FirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">ResetTagColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagColor` <a name="ResetTagColor" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```csharp
private void ResetTagColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">TagColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">TagColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagColorInput`<sup>Optional</sup> <a name="TagColorInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```csharp
public string TagColorInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TagColor`<sup>Required</sup> <a name="TagColor" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```csharp
public string TagColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```csharp
private void ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">ConditionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">ConditionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionNameInput`<sup>Optional</sup> <a name="ConditionNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```csharp
public string ConditionNameInput { get; }
```

- *Type:* string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```csharp
public bool|IResolvable UseInAppDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```csharp
public string ConditionName { get; }
```

- *Type:* string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```csharp
private void ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```csharp
public bool|IResolvable UseInAppDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">PutConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">ResetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionalValues` <a name="PutConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```csharp
private void PutConditionalValues(IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

---

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```csharp
private void PutDefaultValue(FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `ResetConditionalValues` <a name="ResetConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```csharp
private void ResetConditionalValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```csharp
private void ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">ConditionalValues</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">ConditionalValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionalValues`<sup>Required</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList ConditionalValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference DefaultValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `ConditionalValuesInput`<sup>Optional</sup> <a name="ConditionalValuesInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[] ConditionalValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue DefaultValueInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameterGroupsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>

---


### FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

---


### FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```csharp
private void ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">ConditionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">ConditionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionNameInput`<sup>Optional</sup> <a name="ConditionNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```csharp
public string ConditionNameInput { get; }
```

- *Type:* string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```csharp
public bool|IResolvable UseInAppDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```csharp
public string ConditionName { get; }
```

- *Type:* string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParametersConditionalValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>

---


### FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```csharp
private void ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```csharp
public bool|IResolvable UseInAppDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```csharp
public bool|IResolvable UseInAppDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParametersDefaultValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### FirebaseRemoteConfigRemoteConfigParametersList <a name="FirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>[]

---


### FirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">PutConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">ResetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionalValues` <a name="PutConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```csharp
private void PutConditionalValues(IResolvable|FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

---

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```csharp
private void PutDefaultValue(FirebaseRemoteConfigRemoteConfigParametersDefaultValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `ResetConditionalValues` <a name="ResetConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```csharp
private void ResetConditionalValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```csharp
private void ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">ConditionalValues</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">ConditionalValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionalValues`<sup>Required</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList ConditionalValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference DefaultValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `ConditionalValuesInput`<sup>Optional</sup> <a name="ConditionalValuesInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParametersConditionalValues[] ConditionalValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigParametersDefaultValue DefaultValueInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>

---


### FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FirebaseRemoteConfigRemoteConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

---


### FirebaseRemoteConfigRemoteConfigVersionList <a name="FirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="FirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">IsLegacy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">RollbackSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">UpdateOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">UpdateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">UpdateUser</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList">FirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion">FirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsLegacy`<sup>Required</sup> <a name="IsLegacy" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```csharp
public IResolvable IsLegacy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RollbackSource`<sup>Required</sup> <a name="RollbackSource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```csharp
public string RollbackSource { get; }
```

- *Type:* string

---

##### `UpdateOrigin`<sup>Required</sup> <a name="UpdateOrigin" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```csharp
public string UpdateOrigin { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```csharp
public string UpdateType { get; }
```

- *Type:* string

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigVersionUpdateUserList UpdateUser { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList">FirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```csharp
public string VersionNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion">FirebaseRemoteConfigRemoteConfigVersion</a>

---


### FirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigVersionUpdateUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```csharp
private FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">ImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser">FirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```csharp
public string ImageUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```csharp
public FirebaseRemoteConfigRemoteConfigVersionUpdateUser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser">FirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



