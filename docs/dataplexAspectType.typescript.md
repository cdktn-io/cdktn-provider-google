# `dataplexAspectType` Submodule <a name="`dataplexAspectType` Submodule" id="@cdktn/provider-google.dataplexAspectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexAspectType <a name="DataplexAspectType" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type google_dataplex_aspect_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

new dataplexAspectType.DataplexAspectType(scope: Construct, id: string, config?: DataplexAspectTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig">DataplexAspectTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig">DataplexAspectTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetAspectTypeId">resetAspectTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDataClassification">resetDataClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetMetadataTemplate">resetMetadataTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexAspectTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a>

---

##### `resetAspectTypeId` <a name="resetAspectTypeId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetAspectTypeId"></a>

```typescript
public resetAspectTypeId(): void
```

##### `resetDataClassification` <a name="resetDataClassification" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDataClassification"></a>

```typescript
public resetDataClassification(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMetadataTemplate` <a name="resetMetadataTemplate" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetMetadataTemplate"></a>

```typescript
public resetMetadataTemplate(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexAspectType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isConstruct"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

dataplexAspectType.DataplexAspectType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isTerraformElement"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

dataplexAspectType.DataplexAspectType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isTerraformResource"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

dataplexAspectType.DataplexAspectType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

dataplexAspectType.DataplexAspectType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataplexAspectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexAspectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexAspectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexAspectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference">DataplexAspectTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.transferStatus">transferStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeIdInput">aspectTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.dataClassificationInput">dataClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplateInput">metadataTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeId">aspectTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.dataClassification">dataClassification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplate">metadataTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexAspectTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference">DataplexAspectTypeTimeoutsOutputReference</a>

---

##### `transferStatus`<sup>Required</sup> <a name="transferStatus" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.transferStatus"></a>

```typescript
public readonly transferStatus: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `aspectTypeIdInput`<sup>Optional</sup> <a name="aspectTypeIdInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeIdInput"></a>

```typescript
public readonly aspectTypeIdInput: string;
```

- *Type:* string

---

##### `dataClassificationInput`<sup>Optional</sup> <a name="dataClassificationInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.dataClassificationInput"></a>

```typescript
public readonly dataClassificationInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataTemplateInput`<sup>Optional</sup> <a name="metadataTemplateInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplateInput"></a>

```typescript
public readonly metadataTemplateInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexAspectTypeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a>

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeId"></a>

```typescript
public readonly aspectTypeId: string;
```

- *Type:* string

---

##### `dataClassification`<sup>Required</sup> <a name="dataClassification" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.dataClassification"></a>

```typescript
public readonly dataClassification: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadataTemplate`<sup>Required</sup> <a name="metadataTemplate" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplate"></a>

```typescript
public readonly metadataTemplate: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexAspectTypeConfig <a name="DataplexAspectTypeConfig" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.Initializer"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

const dataplexAspectTypeConfig: dataplexAspectType.DataplexAspectTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.aspectTypeId">aspectTypeId</a></code> | <code>string</code> | The aspect type id of the aspect type. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.dataClassification">dataClassification</a></code> | <code>string</code> | Classifies the data stored by the aspect. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.description">description</a></code> | <code>string</code> | Description of the AspectType. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#id DataplexAspectType#id}. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the AspectType. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.location">location</a></code> | <code>string</code> | The location where aspect type will be created in. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.metadataTemplate">metadataTemplate</a></code> | <code>string</code> | MetadataTemplate of the Aspect. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#project DataplexAspectType#project}. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aspectTypeId`<sup>Optional</sup> <a name="aspectTypeId" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.aspectTypeId"></a>

```typescript
public readonly aspectTypeId: string;
```

- *Type:* string

The aspect type id of the aspect type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#aspect_type_id DataplexAspectType#aspect_type_id}

---

##### `dataClassification`<sup>Optional</sup> <a name="dataClassification" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.dataClassification"></a>

```typescript
public readonly dataClassification: string;
```

- *Type:* string

Classifies the data stored by the aspect.

'DATA_CLASSIFICATION_UNSPECIFIED' denotes that the aspect contains only metadata
while 'METADATA_AND_DATA' indicates data derived content.
<br><br> Possible values: ["DATA_CLASSIFICATION_UNSPECIFIED", "METADATA_AND_DATA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#data_classification DataplexAspectType#data_classification}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#deletion_policy DataplexAspectType#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the AspectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#description DataplexAspectType#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#display_name DataplexAspectType#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#id DataplexAspectType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the AspectType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#labels DataplexAspectType#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where aspect type will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#location DataplexAspectType#location}

---

##### `metadataTemplate`<sup>Optional</sup> <a name="metadataTemplate" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.metadataTemplate"></a>

```typescript
public readonly metadataTemplate: string;
```

- *Type:* string

MetadataTemplate of the Aspect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#metadata_template DataplexAspectType#metadata_template}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#project DataplexAspectType#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexAspectTypeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#timeouts DataplexAspectType#timeouts}

---

### DataplexAspectTypeTimeouts <a name="DataplexAspectTypeTimeouts" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.Initializer"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

const dataplexAspectTypeTimeouts: dataplexAspectType.DataplexAspectTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#create DataplexAspectType#create}. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#delete DataplexAspectType#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#update DataplexAspectType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#create DataplexAspectType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#delete DataplexAspectType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_aspect_type#update DataplexAspectType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexAspectTypeTimeoutsOutputReference <a name="DataplexAspectTypeTimeoutsOutputReference" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexAspectType } from '@cdktn/provider-google'

new dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexAspectTypeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a>

---



