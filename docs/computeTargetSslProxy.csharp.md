# `computeTargetSslProxy` Submodule <a name="`computeTargetSslProxy` Submodule" id="@cdktn/provider-google.computeTargetSslProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetSslProxy <a name="ComputeTargetSslProxy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy google_compute_target_ssl_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeTargetSslProxy(Construct Scope, string Id, ComputeTargetSslProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig">ComputeTargetSslProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig">ComputeTargetSslProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetCertificateMap">ResetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslCertificates">ResetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeTargetSslProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

---

##### `ResetCertificateMap` <a name="ResetCertificateMap" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetCertificateMap"></a>

```csharp
private void ResetCertificateMap()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetSslCertificates` <a name="ResetSslCertificates" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslCertificates"></a>

```csharp
private void ResetSslCertificates()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetSslPolicy"></a>

```csharp
private void ResetSslPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeTargetSslProxy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeTargetSslProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeTargetSslProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeTargetSslProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeTargetSslProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeTargetSslProxy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeTargetSslProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeTargetSslProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeTargetSslProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyId">ProxyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference">ComputeTargetSslProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendServiceInput">BackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMapInput">CertificateMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificatesInput">SslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicyInput">SslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendService">BackendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMap">CertificateMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificates">SslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyId"></a>

```csharp
public double ProxyId { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeouts"></a>

```csharp
public ComputeTargetSslProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference">ComputeTargetSslProxyTimeoutsOutputReference</a>

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendServiceInput"></a>

```csharp
public string BackendServiceInput { get; }
```

- *Type:* string

---

##### `CertificateMapInput`<sup>Optional</sup> <a name="CertificateMapInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMapInput"></a>

```csharp
public string CertificateMapInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `SslCertificatesInput`<sup>Optional</sup> <a name="SslCertificatesInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificatesInput"></a>

```csharp
public string[] SslCertificatesInput { get; }
```

- *Type:* string[]

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicyInput"></a>

```csharp
public string SslPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeTargetSslProxyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.backendService"></a>

```csharp
public string BackendService { get; }
```

- *Type:* string

---

##### `CertificateMap`<sup>Required</sup> <a name="CertificateMap" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.certificateMap"></a>

```csharp
public string CertificateMap { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `SslCertificates`<sup>Required</sup> <a name="SslCertificates" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslCertificates"></a>

```csharp
public string[] SslCertificates { get; }
```

- *Type:* string[]

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetSslProxyConfig <a name="ComputeTargetSslProxyConfig" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeTargetSslProxyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackendService,
    string Name,
    string CertificateMap = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string Project = null,
    string ProxyHeader = null,
    string[] SslCertificates = null,
    string SslPolicy = null,
    ComputeTargetSslProxyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.backendService">BackendService</a></code> | <code>string</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.certificateMap">CertificateMap</a></code> | <code>string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#id ComputeTargetSslProxy#id}. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#project ComputeTargetSslProxy#project}. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslCertificates">SslCertificates</a></code> | <code>string[]</code> | A list of SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslPolicy">SslPolicy</a></code> | <code>string</code> | A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.backendService"></a>

```csharp
public string BackendService { get; set; }
```

- *Type:* string

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#backend_service ComputeTargetSslProxy#backend_service}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#name ComputeTargetSslProxy#name}

---

##### `CertificateMap`<sup>Optional</sup> <a name="CertificateMap" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.certificateMap"></a>

```csharp
public string CertificateMap { get; set; }
```

- *Type:* string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field can only be set for global target proxies.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#certificate_map ComputeTargetSslProxy#certificate_map}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#deletion_policy ComputeTargetSslProxy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#description ComputeTargetSslProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#id ComputeTargetSslProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#project ComputeTargetSslProxy#project}.

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#proxy_header ComputeTargetSslProxy#proxy_header}

---

##### `SslCertificates`<sup>Optional</sup> <a name="SslCertificates" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslCertificates"></a>

```csharp
public string[] SslCertificates { get; set; }
```

- *Type:* string[]

A list of SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one
SSL certificate must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#ssl_certificates ComputeTargetSslProxy#ssl_certificates}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.sslPolicy"></a>

```csharp
public string SslPolicy { get; set; }
```

- *Type:* string

A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource.

If not set, the TargetSslProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#ssl_policy ComputeTargetSslProxy#ssl_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyConfig.property.timeouts"></a>

```csharp
public ComputeTargetSslProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#timeouts ComputeTargetSslProxy#timeouts}

---

### ComputeTargetSslProxyTimeouts <a name="ComputeTargetSslProxyTimeouts" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeTargetSslProxyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#create ComputeTargetSslProxy#create}. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#delete ComputeTargetSslProxy#delete}. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#update ComputeTargetSslProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#create ComputeTargetSslProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#delete ComputeTargetSslProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_target_ssl_proxy#update ComputeTargetSslProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetSslProxyTimeoutsOutputReference <a name="ComputeTargetSslProxyTimeoutsOutputReference" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeTargetSslProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeTargetSslProxyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeTargetSslProxy.ComputeTargetSslProxyTimeouts">ComputeTargetSslProxyTimeouts</a>

---



