# `biglakeIcebergCatalog` Submodule <a name="`biglakeIcebergCatalog` Submodule" id="@cdktn/provider-google.biglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergCatalog <a name="BiglakeIcebergCatalog" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

new biglakeIcebergCatalog.BiglakeIcebergCatalog(scope: Construct, id: string, config: BiglakeIcebergCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig">BiglakeIcebergCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig">BiglakeIcebergCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode">resetCredentialMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation">resetPrimaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts"></a>

```typescript
public putTimeouts(value: BiglakeIcebergCatalogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `resetCredentialMode` <a name="resetCredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode"></a>

```typescript
public resetCredentialMode(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrimaryLocation` <a name="resetPrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation"></a>

```typescript
public resetPrimaryLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeIcebergCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount">biglakeServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation">defaultLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions">storageRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput">catalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput">credentialModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput">primaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType">catalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode">credentialMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation">primaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `biglakeServiceAccount`<sup>Required</sup> <a name="biglakeServiceAccount" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```typescript
public readonly biglakeServiceAccount: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `defaultLocation`<sup>Required</sup> <a name="defaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation"></a>

```typescript
public readonly defaultLocation: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas"></a>

```typescript
public readonly replicas: BiglakeIcebergCatalogReplicasList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a>

---

##### `storageRegions`<sup>Required</sup> <a name="storageRegions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions"></a>

```typescript
public readonly storageRegions: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeIcebergCatalogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput"></a>

```typescript
public readonly catalogTypeInput: string;
```

- *Type:* string

---

##### `credentialModeInput`<sup>Optional</sup> <a name="credentialModeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput"></a>

```typescript
public readonly credentialModeInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryLocationInput`<sup>Optional</sup> <a name="primaryLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput"></a>

```typescript
public readonly primaryLocationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BiglakeIcebergCatalogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

---

##### `credentialMode`<sup>Required</sup> <a name="credentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode"></a>

```typescript
public readonly credentialMode: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation"></a>

```typescript
public readonly primaryLocation: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergCatalogConfig <a name="BiglakeIcebergCatalogConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

const biglakeIcebergCatalogConfig: biglakeIcebergCatalog.BiglakeIcebergCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType">catalogType</a></code> | <code>string</code> | The catalog type of the IcebergCatalog. Currently only supports the type for Google Cloud Storage Buckets. Possible values: ["CATALOG_TYPE_GCS_BUCKET"]. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name">name</a></code> | <code>string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode">credentialMode</a></code> | <code>string</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation">primaryLocation</a></code> | <code>string</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

The catalog type of the IcebergCatalog. Currently only supports the type for Google Cloud Storage Buckets. Possible values: ["CATALOG_TYPE_GCS_BUCKET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#catalog_type BiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#name BiglakeIcebergCatalog#name}

---

##### `credentialMode`<sup>Optional</sup> <a name="credentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode"></a>

```typescript
public readonly credentialMode: string;
```

- *Type:* string

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#credential_mode BiglakeIcebergCatalog#credential_mode}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#deletion_policy BiglakeIcebergCatalog#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryLocation`<sup>Optional</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```typescript
public readonly primaryLocation: string;
```

- *Type:* string

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#primary_location BiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeIcebergCatalogTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#timeouts BiglakeIcebergCatalog#timeouts}

---

### BiglakeIcebergCatalogReplicas <a name="BiglakeIcebergCatalogReplicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

const biglakeIcebergCatalogReplicas: biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas = { ... }
```


### BiglakeIcebergCatalogTimeouts <a name="BiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

const biglakeIcebergCatalogTimeouts: biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergCatalogReplicasList <a name="BiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

new biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get"></a>

```typescript
public get(index: number): BiglakeIcebergCatalogReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BiglakeIcebergCatalogReplicasOutputReference <a name="BiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

new biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeIcebergCatalogReplicas;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a>

---


### BiglakeIcebergCatalogTimeoutsOutputReference <a name="BiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergCatalog } from '@cdktn/provider-google'

new biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergCatalogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---



