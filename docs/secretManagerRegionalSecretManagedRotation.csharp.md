# `secretManagerRegionalSecretManagedRotation` Submodule <a name="`secretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretManagedRotation <a name="SecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotation(Construct Scope, string Id, SecretManagerRegionalSecretManagedRotationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig">SecretManagerRegionalSecretManagedRotationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig">SecretManagerRegionalSecretManagedRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">PutCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudSqlSingleUserCredentials` <a name="PutCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```csharp
private void PutCloudSqlSingleUserCredentials(SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```csharp
private void PutTimeouts(SecretManagerRegionalSecretManagedRotationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecretManagerRegionalSecretManagedRotation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecretManagerRegionalSecretManagedRotation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecretManagerRegionalSecretManagedRotation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecretManagerRegionalSecretManagedRotation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerRegionalSecretManagedRotation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">CloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation">Rotation</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">CloudSqlSingleUserCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudSqlSingleUserCredentials`<sup>Required</sup> <a name="CloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference CloudSqlSingleUserCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationRotationList Rotation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `CloudSqlSingleUserCredentialsInput`<sup>Optional</sup> <a name="CloudSqlSingleUserCredentialsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials CloudSqlSingleUserCredentialsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```csharp
public IResolvable|SecretManagerRegionalSecretManagedRotationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials {
    string InstanceId,
    string Username,
    string Password = null,
    string PasswordWo = null,
    string PasswordWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">InstanceId</a></code> | <code>string</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">Username</a></code> | <code>string</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">Password</a></code> | <code>string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">PasswordWo</a></code> | <code>string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | Triggers update of 'password_wo' write-only. |

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#instance_id SecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#username SecretManagerRegionalSecretManagedRotation#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password SecretManagerRegionalSecretManagedRotation#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo SecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo_version SecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### SecretManagerRegionalSecretManagedRotationConfig <a name="SecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials CloudSqlSingleUserCredentials,
    string Location,
    string SecretId,
    string Id = null,
    string Project = null,
    SecretManagerRegionalSecretManagedRotationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">CloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location">Location</a></code> | <code>string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId">SecretId</a></code> | <code>string</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudSqlSingleUserCredentials`<sup>Required</sup> <a name="CloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials CloudSqlSingleUserCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials SecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#location SecretManagerRegionalSecretManagedRotation#location}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#secret_id SecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#timeouts SecretManagerRegionalSecretManagedRotation#timeouts}

---

### SecretManagerRegionalSecretManagedRotationRotation <a name="SecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotation {

};
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus {

};
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError {

};
```


### SecretManagerRegionalSecretManagedRotationTimeouts <a name="SecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```csharp
private void ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```csharp
private void ResetPasswordWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```csharp
public string PasswordWoVersionInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### ~~`PasswordWo`~~<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```csharp
public string PasswordWoVersion { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### SecretManagerRegionalSecretManagedRotationRotationList <a name="SecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```csharp
private SecretManagerRegionalSecretManagedRotationRotationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```csharp
private SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```csharp
private SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### SecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">ManagedRotationStatus</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedRotationStatus`<sup>Required</sup> <a name="ManagedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList ManagedRotationStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```csharp
public SecretManagerRegionalSecretManagedRotationRotation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a>

---


### SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretManagerRegionalSecretManagedRotationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---



