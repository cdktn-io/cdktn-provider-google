# `sccFolderSccBigQueryExport` Submodule <a name="`sccFolderSccBigQueryExport` Submodule" id="@cdktn/provider-google.sccFolderSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccFolderSccBigQueryExport <a name="SccFolderSccBigQueryExport" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export google_scc_folder_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

new sccFolderSccBigQueryExport.SccFolderSccBigQueryExport(scope: Construct, id: string, config: SccFolderSccBigQueryExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig">SccFolderSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig">SccFolderSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.putTimeouts"></a>

```typescript
public putTimeouts(value: SccFolderSccBigQueryExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SccFolderSccBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SccFolderSccBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccFolderSccBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccFolderSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SccFolderSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.mostRecentEditor">mostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference">SccFolderSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportIdInput">bigQueryExportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportId">bigQueryExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `mostRecentEditor`<sup>Required</sup> <a name="mostRecentEditor" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.mostRecentEditor"></a>

```typescript
public readonly mostRecentEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeouts"></a>

```typescript
public readonly timeouts: SccFolderSccBigQueryExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference">SccFolderSccBigQueryExportTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `bigQueryExportIdInput`<sup>Optional</sup> <a name="bigQueryExportIdInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportIdInput"></a>

```typescript
public readonly bigQueryExportIdInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccFolderSccBigQueryExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a>

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.bigQueryExportId"></a>

```typescript
public readonly bigQueryExportId: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccFolderSccBigQueryExportConfig <a name="SccFolderSccBigQueryExportConfig" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.Initializer"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

const sccFolderSccBigQueryExportConfig: sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.bigQueryExportId">bigQueryExportId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dataset">dataset</a></code> | <code>string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.description">description</a></code> | <code>string</code> | The description of the export (max of 1024 characters). |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.filter">filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.folder">folder</a></code> | <code>string</code> | The folder where Cloud Security Command Center Big Query Export Config lives in. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#id SccFolderSccBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bigQueryExportId`<sup>Required</sup> <a name="bigQueryExportId" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.bigQueryExportId"></a>

```typescript
public readonly bigQueryExportId: string;
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#big_query_export_id SccFolderSccBigQueryExport#big_query_export_id}

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#dataset SccFolderSccBigQueryExport#dataset}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the export (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#description SccFolderSccBigQueryExport#description}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#filter SccFolderSccBigQueryExport#filter}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The folder where Cloud Security Command Center Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#folder SccFolderSccBigQueryExport#folder}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#deletion_policy SccFolderSccBigQueryExport#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#id SccFolderSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccFolderSccBigQueryExportTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#timeouts SccFolderSccBigQueryExport#timeouts}

---

### SccFolderSccBigQueryExportTimeouts <a name="SccFolderSccBigQueryExportTimeouts" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.Initializer"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

const sccFolderSccBigQueryExportTimeouts: sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#create SccFolderSccBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#delete SccFolderSccBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#update SccFolderSccBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#create SccFolderSccBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#delete SccFolderSccBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/scc_folder_scc_big_query_export#update SccFolderSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccFolderSccBigQueryExportTimeoutsOutputReference <a name="SccFolderSccBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccFolderSccBigQueryExport } from '@cdktn/provider-google'

new sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccFolderSccBigQueryExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccFolderSccBigQueryExport.SccFolderSccBigQueryExportTimeouts">SccFolderSccBigQueryExportTimeouts</a>

---



