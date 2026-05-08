# `apigeeEnvironmentApiRevisionDeployment` Submodule <a name="`apigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentApiRevisionDeployment <a name="ApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeEnvironmentApiRevisionDeployment(Construct Scope, string Id, ApigeeEnvironmentApiRevisionDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig">ApigeeEnvironmentApiRevisionDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig">ApigeeEnvironmentApiRevisionDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">ResetSequencedRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeEnvironmentApiRevisionDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```csharp
private void ResetOverride()
```

##### `ResetSequencedRollout` <a name="ResetSequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```csharp
private void ResetSequencedRollout()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeEnvironmentApiRevisionDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeEnvironmentApiRevisionDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeEnvironmentApiRevisionDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeEnvironmentApiRevisionDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvironmentApiRevisionDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths">Basepaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">DeployStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput">OverrideInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">SequencedRolloutInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override">Override</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">SequencedRollout</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Basepaths`<sup>Required</sup> <a name="Basepaths" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```csharp
public string[] Basepaths { get; }
```

- *Type:* string[]

---

##### `DeployStartTime`<sup>Required</sup> <a name="DeployStartTime" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```csharp
public string DeployStartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```csharp
public ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```csharp
public bool|IResolvable OverrideInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `SequencedRolloutInput`<sup>Optional</sup> <a name="SequencedRolloutInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```csharp
public bool|IResolvable SequencedRolloutInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```csharp
public IResolvable|ApigeeEnvironmentApiRevisionDeploymentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```csharp
public bool|IResolvable Override { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `SequencedRollout`<sup>Required</sup> <a name="SequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```csharp
public bool|IResolvable SequencedRollout { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentApiRevisionDeploymentConfig <a name="ApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeEnvironmentApiRevisionDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Api,
    string Environment,
    string OrgId,
    double Revision,
    string Id = null,
    bool|IResolvable Override = null,
    bool|IResolvable SequencedRollout = null,
    string ServiceAccount = null,
    ApigeeEnvironmentApiRevisionDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api">Api</a></code> | <code>string</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">Environment</a></code> | <code>string</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">OrgId</a></code> | <code>string</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">Revision</a></code> | <code>double</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override">Override</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">SequencedRollout</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```csharp
public bool|IResolvable Override { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `SequencedRollout`<sup>Optional</sup> <a name="SequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```csharp
public bool|IResolvable SequencedRollout { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```csharp
public ApigeeEnvironmentApiRevisionDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### ApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="ApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeEnvironmentApiRevisionDeploymentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigeeEnvironmentApiRevisionDeploymentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



