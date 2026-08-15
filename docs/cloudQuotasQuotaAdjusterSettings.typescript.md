# `cloudQuotasQuotaAdjusterSettings` Submodule <a name="`cloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaAdjusterSettings <a name="CloudQuotasQuotaAdjusterSettings" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

new cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings(scope: Construct, id: string, config: CloudQuotasQuotaAdjusterSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig">CloudQuotasQuotaAdjusterSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig">CloudQuotasQuotaAdjusterSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudQuotasQuotaAdjusterSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudQuotasQuotaAdjusterSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer">effectiveContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">effectiveEnablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited">inherited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom">inheritedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput">enablementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement">enablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveContainer`<sup>Required</sup> <a name="effectiveContainer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```typescript
public readonly effectiveContainer: string;
```

- *Type:* string

---

##### `effectiveEnablement`<sup>Required</sup> <a name="effectiveEnablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```typescript
public readonly effectiveEnablement: string;
```

- *Type:* string

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited"></a>

```typescript
public readonly inherited: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `inheritedFrom`<sup>Required</sup> <a name="inheritedFrom" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom"></a>

```typescript
public readonly inheritedFrom: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```typescript
public readonly timeouts: CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `enablementInput`<sup>Optional</sup> <a name="enablementInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```typescript
public readonly enablementInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudQuotasQuotaAdjusterSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```typescript
public readonly enablement: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaAdjusterSettingsConfig <a name="CloudQuotasQuotaAdjusterSettingsConfig" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

const cloudQuotasQuotaAdjusterSettingsConfig: cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement">enablement</a></code> | <code>string</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```typescript
public readonly enablement: string;
```

- *Type:* string

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#enablement CloudQuotasQuotaAdjusterSettings#enablement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#parent CloudQuotasQuotaAdjusterSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudQuotasQuotaAdjusterSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#timeouts CloudQuotasQuotaAdjusterSettings#timeouts}

---

### CloudQuotasQuotaAdjusterSettingsTimeouts <a name="CloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

const cloudQuotasQuotaAdjusterSettingsTimeouts: cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google'

new cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudQuotasQuotaAdjusterSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---



