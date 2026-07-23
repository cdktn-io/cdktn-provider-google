# `chronicleParser` Submodule <a name="`chronicleParser` Submodule" id="@cdktn/provider-google.chronicleParser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParser <a name="ChronicleParser" id="@cdktn/provider-google.chronicleParser.ChronicleParser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser google_chronicle_parser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParser(scope: Construct, id: string, config: ChronicleParserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig">ChronicleParserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig">ChronicleParserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode">putLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo">putVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetCbn">resetCbn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetLowCode">resetLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidatedOnEmptyLogs">resetValidatedOnEmptyLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidationSkipped">resetValidationSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetVersionInfo">resetVersionInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleParser.ChronicleParser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleParser.ChronicleParser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleParser.ChronicleParser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLowCode` <a name="putLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode"></a>

```typescript
public putLowCode(value: ChronicleParserLowCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleParserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---

##### `putVersionInfo` <a name="putVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo"></a>

```typescript
public putVersionInfo(value: ChronicleParserVersionInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---

##### `resetCbn` <a name="resetCbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetCbn"></a>

```typescript
public resetCbn(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLowCode` <a name="resetLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetLowCode"></a>

```typescript
public resetLowCode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidatedOnEmptyLogs` <a name="resetValidatedOnEmptyLogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidatedOnEmptyLogs"></a>

```typescript
public resetValidatedOnEmptyLogs(): void
```

##### `resetValidationSkipped` <a name="resetValidationSkipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidationSkipped"></a>

```typescript
public resetValidationSkipped(): void
```

##### `resetVersionInfo` <a name="resetVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetVersionInfo"></a>

```typescript
public resetVersionInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

chronicleParser.ChronicleParser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

chronicleParser.ChronicleParser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

chronicleParser.ChronicleParser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

chronicleParser.ChronicleParser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleParser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleParser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.changelogs">changelogs</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList">ChronicleParserChangelogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.creator">creator</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList">ChronicleParserCreatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.dynamicParsingConfig">dynamicParsingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference">ChronicleParserLowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.parser">parser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.parserExtension">parserExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.releaseStage">releaseStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference">ChronicleParserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationReport">validationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationStage">validationStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference">ChronicleParserVersionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbnInput">cbnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtypeInput">logtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCodeInput">lowCodeInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogsInput">validatedOnEmptyLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkippedInput">validationSkippedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfoInput">versionInfoInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbn">cbn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtype">logtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `changelogs`<sup>Required</sup> <a name="changelogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.changelogs"></a>

```typescript
public readonly changelogs: ChronicleParserChangelogsList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList">ChronicleParserChangelogsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.creator"></a>

```typescript
public readonly creator: ChronicleParserCreatorList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList">ChronicleParserCreatorList</a>

---

##### `dynamicParsingConfig`<sup>Required</sup> <a name="dynamicParsingConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.dynamicParsingConfig"></a>

```typescript
public readonly dynamicParsingConfig: string;
```

- *Type:* string

---

##### `lowCode`<sup>Required</sup> <a name="lowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCode"></a>

```typescript
public readonly lowCode: ChronicleParserLowCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference">ChronicleParserLowCodeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.parser"></a>

```typescript
public readonly parser: string;
```

- *Type:* string

---

##### `parserExtension`<sup>Required</sup> <a name="parserExtension" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.parserExtension"></a>

```typescript
public readonly parserExtension: string;
```

- *Type:* string

---

##### `releaseStage`<sup>Required</sup> <a name="releaseStage" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.releaseStage"></a>

```typescript
public readonly releaseStage: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleParserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference">ChronicleParserTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationReport"></a>

```typescript
public readonly validationReport: string;
```

- *Type:* string

---

##### `validationStage`<sup>Required</sup> <a name="validationStage" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationStage"></a>

```typescript
public readonly validationStage: string;
```

- *Type:* string

---

##### `versionInfo`<sup>Required</sup> <a name="versionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfo"></a>

```typescript
public readonly versionInfo: ChronicleParserVersionInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference">ChronicleParserVersionInfoOutputReference</a>

---

##### `cbnInput`<sup>Optional</sup> <a name="cbnInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbnInput"></a>

```typescript
public readonly cbnInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logtypeInput`<sup>Optional</sup> <a name="logtypeInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtypeInput"></a>

```typescript
public readonly logtypeInput: string;
```

- *Type:* string

---

##### `lowCodeInput`<sup>Optional</sup> <a name="lowCodeInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCodeInput"></a>

```typescript
public readonly lowCodeInput: ChronicleParserLowCode;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleParserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---

##### `validatedOnEmptyLogsInput`<sup>Optional</sup> <a name="validatedOnEmptyLogsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogsInput"></a>

```typescript
public readonly validatedOnEmptyLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationSkippedInput`<sup>Optional</sup> <a name="validationSkippedInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkippedInput"></a>

```typescript
public readonly validationSkippedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versionInfoInput`<sup>Optional</sup> <a name="versionInfoInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfoInput"></a>

```typescript
public readonly versionInfoInput: ChronicleParserVersionInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---

##### `cbn`<sup>Required</sup> <a name="cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbn"></a>

```typescript
public readonly cbn: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtype"></a>

```typescript
public readonly logtype: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `validatedOnEmptyLogs`<sup>Required</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogs"></a>

```typescript
public readonly validatedOnEmptyLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationSkipped`<sup>Required</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserChangelogs <a name="ChronicleParserChangelogs" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserChangelogs: chronicleParser.ChronicleParserChangelogs = { ... }
```


### ChronicleParserChangelogsEntries <a name="ChronicleParserChangelogsEntries" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserChangelogsEntries: chronicleParser.ChronicleParserChangelogsEntries = { ... }
```


### ChronicleParserConfig <a name="ChronicleParserConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserConfig: chronicleParser.ChronicleParserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.logtype">logtype</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.cbn">cbn</a></code> | <code>string</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#id ChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#project ChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#instance ChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#location ChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.logtype"></a>

```typescript
public readonly logtype: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#logtype ChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.cbn"></a>

```typescript
public readonly cbn: string;
```

- *Type:* string

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#cbn ChronicleParser#cbn}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#deletion_policy ChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#id ChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowCode`<sup>Optional</sup> <a name="lowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lowCode"></a>

```typescript
public readonly lowCode: ChronicleParserLowCode;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#low_code ChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#project ChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleParserTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#timeouts ChronicleParser#timeouts}

---

##### `validatedOnEmptyLogs`<sup>Optional</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validatedOnEmptyLogs"></a>

```typescript
public readonly validatedOnEmptyLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#validated_on_empty_logs ChronicleParser#validated_on_empty_logs}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#validation_skipped ChronicleParser#validation_skipped}

---

##### `versionInfo`<sup>Optional</sup> <a name="versionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.versionInfo"></a>

```typescript
public readonly versionInfo: ChronicleParserVersionInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#version_info ChronicleParser#version_info}

---

### ChronicleParserCreator <a name="ChronicleParserCreator" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreator.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserCreator: chronicleParser.ChronicleParserCreator = { ... }
```


### ChronicleParserLowCode <a name="ChronicleParserLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserLowCode: chronicleParser.ChronicleParserLowCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.log">log</a></code> | <code>string</code> | The log used to create this low code parser in the UI. |

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: ChronicleParserLowCodeFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#field_extractors ChronicleParser#field_extractors}

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#log ChronicleParser#log}

---

### ChronicleParserLowCodeFieldExtractors <a name="ChronicleParserLowCodeFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserLowCodeFieldExtractors: chronicleParser.ChronicleParserLowCodeFieldExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.logFormat">logFormat</a></code> | <code>string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `appendRepeatedFields`<sup>Optional</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#append_repeated_fields ChronicleParser#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.extractors"></a>

```typescript
public readonly extractors: IResolvable | ChronicleParserLowCodeFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#extractors ChronicleParser#extractors}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#log_format ChronicleParser#log_format}

---

##### `preprocessConfig`<sup>Optional</sup> <a name="preprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: ChronicleParserLowCodeFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#preprocess_config ChronicleParser#preprocess_config}

---

### ChronicleParserLowCodeFieldExtractorsExtractors <a name="ChronicleParserLowCodeFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserLowCodeFieldExtractorsExtractors: chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath">destinationPath</a></code> | <code>string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath">fieldPath</a></code> | <code>string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.value">value</a></code> | <code>string</code> | Value to be mapped to the destination path directly. |

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#destination_path ChronicleParser#destination_path}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#field_path ChronicleParser#field_path}

---

##### `preconditionOp`<sup>Optional</sup> <a name="preconditionOp" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#precondition_op ChronicleParser#precondition_op}

---

##### `preconditionPath`<sup>Optional</sup> <a name="preconditionPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#precondition_path ChronicleParser#precondition_path}

---

##### `preconditionValue`<sup>Optional</sup> <a name="preconditionValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#precondition_value ChronicleParser#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#value ChronicleParser#value}

---

### ChronicleParserLowCodeFieldExtractorsPreprocessConfig <a name="ChronicleParserLowCodeFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserLowCodeFieldExtractorsPreprocessConfig: chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex">grokRegex</a></code> | <code>string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grokRegex`<sup>Optional</sup> <a name="grokRegex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#grok_regex ChronicleParser#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#target ChronicleParser#target}

---

### ChronicleParserTimeouts <a name="ChronicleParserTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserTimeouts: chronicleParser.ChronicleParserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#create ChronicleParser#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#update ChronicleParser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#create ChronicleParser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#update ChronicleParser#update}.

---

### ChronicleParserVersionInfo <a name="ChronicleParserVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

const chronicleParserVersionInfo: chronicleParser.ChronicleParserVersionInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.property.autoUpgradeDisabled">autoUpgradeDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Signifies if the parser is disabled for auto upgrade. |

---

##### `autoUpgradeDisabled`<sup>Required</sup> <a name="autoUpgradeDisabled" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.property.autoUpgradeDisabled"></a>

```typescript
public readonly autoUpgradeDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_parser#auto_upgrade_disabled ChronicleParser#auto_upgrade_disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserChangelogsEntriesList <a name="ChronicleParserChangelogsEntriesList" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserChangelogsEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get"></a>

```typescript
public get(index: number): ChronicleParserChangelogsEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleParserChangelogsEntriesOutputReference <a name="ChronicleParserChangelogsEntriesOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserChangelogsEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.changeMessage">changeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.parserVersion">parserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries">ChronicleParserChangelogsEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeMessage`<sup>Required</sup> <a name="changeMessage" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.changeMessage"></a>

```typescript
public readonly changeMessage: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `parserVersion`<sup>Required</sup> <a name="parserVersion" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.parserVersion"></a>

```typescript
public readonly parserVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserChangelogsEntries;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries">ChronicleParserChangelogsEntries</a>

---


### ChronicleParserChangelogsList <a name="ChronicleParserChangelogsList" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserChangelogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get"></a>

```typescript
public get(index: number): ChronicleParserChangelogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleParserChangelogsOutputReference <a name="ChronicleParserChangelogsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserChangelogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList">ChronicleParserChangelogsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs">ChronicleParserChangelogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.entries"></a>

```typescript
public readonly entries: ChronicleParserChangelogsEntriesList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList">ChronicleParserChangelogsEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserChangelogs;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs">ChronicleParserChangelogs</a>

---


### ChronicleParserCreatorList <a name="ChronicleParserCreatorList" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserCreatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get"></a>

```typescript
public get(index: number): ChronicleParserCreatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleParserCreatorOutputReference <a name="ChronicleParserCreatorOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserCreatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreator">ChronicleParserCreator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserCreator;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreator">ChronicleParserCreator</a>

---


### ChronicleParserLowCodeFieldExtractorsExtractorsList <a name="ChronicleParserLowCodeFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get"></a>

```typescript
public get(index: number): ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserLowCodeFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---


### ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference <a name="ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp">resetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath">resetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue">resetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetPreconditionOp` <a name="resetPreconditionOp" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```typescript
public resetPreconditionOp(): void
```

##### `resetPreconditionPath` <a name="resetPreconditionPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```typescript
public resetPreconditionPath(): void
```

##### `resetPreconditionValue` <a name="resetPreconditionValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```typescript
public resetPreconditionValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">preconditionOpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">preconditionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">preconditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `preconditionOpInput`<sup>Optional</sup> <a name="preconditionOpInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```typescript
public readonly preconditionOpInput: string;
```

- *Type:* string

---

##### `preconditionPathInput`<sup>Optional</sup> <a name="preconditionPathInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```typescript
public readonly preconditionPathInput: string;
```

- *Type:* string

---

##### `preconditionValueInput`<sup>Optional</sup> <a name="preconditionValueInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```typescript
public readonly preconditionValueInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `preconditionOp`<sup>Required</sup> <a name="preconditionOp" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

---

##### `preconditionPath`<sup>Required</sup> <a name="preconditionPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

---

##### `preconditionValue`<sup>Required</sup> <a name="preconditionValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserLowCodeFieldExtractorsExtractors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>

---


### ChronicleParserLowCodeFieldExtractorsOutputReference <a name="ChronicleParserLowCodeFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors">putExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig">putPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields">resetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors">resetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig">resetPreprocessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtractors` <a name="putExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors"></a>

```typescript
public putExtractors(value: IResolvable | ChronicleParserLowCodeFieldExtractorsExtractors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---

##### `putPreprocessConfig` <a name="putPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig"></a>

```typescript
public putPreprocessConfig(value: ChronicleParserLowCodeFieldExtractorsPreprocessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `resetAppendRepeatedFields` <a name="resetAppendRepeatedFields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```typescript
public resetAppendRepeatedFields(): void
```

##### `resetExtractors` <a name="resetExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors"></a>

```typescript
public resetExtractors(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetPreprocessConfig` <a name="resetPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```typescript
public resetPreprocessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList">ChronicleParserLowCodeFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet">transformedCbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">appendRepeatedFieldsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput">extractorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput">preprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors"></a>

```typescript
public readonly extractors: ChronicleParserLowCodeFieldExtractorsExtractorsList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList">ChronicleParserLowCodeFieldExtractorsExtractorsList</a>

---

##### `preprocessConfig`<sup>Required</sup> <a name="preprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformedCbnSnippet`<sup>Required</sup> <a name="transformedCbnSnippet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```typescript
public readonly transformedCbnSnippet: string;
```

- *Type:* string

---

##### `appendRepeatedFieldsInput`<sup>Optional</sup> <a name="appendRepeatedFieldsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```typescript
public readonly appendRepeatedFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extractorsInput`<sup>Optional</sup> <a name="extractorsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput"></a>

```typescript
public readonly extractorsInput: IResolvable | ChronicleParserLowCodeFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `preprocessConfigInput`<sup>Optional</sup> <a name="preprocessConfigInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```typescript
public readonly preprocessConfigInput: ChronicleParserLowCodeFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `appendRepeatedFields`<sup>Required</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserLowCodeFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---


### ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">resetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrokRegex` <a name="resetGrokRegex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```typescript
public resetGrokRegex(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grokRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grokRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grokRegexInput`<sup>Optional</sup> <a name="grokRegexInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```typescript
public readonly grokRegexInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `grokRegex`<sup>Required</sup> <a name="grokRegex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserLowCodeFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserLowCodeOutputReference <a name="ChronicleParserLowCodeOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserLowCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors">putFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetFieldExtractors">resetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetLog">resetLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldExtractors` <a name="putFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors"></a>

```typescript
public putFieldExtractors(value: ChronicleParserLowCodeFieldExtractors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---

##### `resetFieldExtractors` <a name="resetFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetFieldExtractors"></a>

```typescript
public resetFieldExtractors(): void
```

##### `resetLog` <a name="resetLog" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetLog"></a>

```typescript
public resetLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference">ChronicleParserLowCodeFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractorsInput">fieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.logInput">logInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.log">log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldExtractors`<sup>Required</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: ChronicleParserLowCodeFieldExtractorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference">ChronicleParserLowCodeFieldExtractorsOutputReference</a>

---

##### `fieldExtractorsInput`<sup>Optional</sup> <a name="fieldExtractorsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractorsInput"></a>

```typescript
public readonly fieldExtractorsInput: ChronicleParserLowCodeFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.logInput"></a>

```typescript
public readonly logInput: string;
```

- *Type:* string

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserLowCode;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---


### ChronicleParserTimeoutsOutputReference <a name="ChronicleParserTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---


### ChronicleParserVersionInfoOutputReference <a name="ChronicleParserVersionInfoOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer"></a>

```typescript
import { chronicleParser } from '@cdktn/provider-google'

new chronicleParser.ChronicleParserVersionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParser">latestParser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParserVersion">latestParserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.rollbackAvailable">rollbackAvailable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput">autoUpgradeDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled">autoUpgradeDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestParser`<sup>Required</sup> <a name="latestParser" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParser"></a>

```typescript
public readonly latestParser: string;
```

- *Type:* string

---

##### `latestParserVersion`<sup>Required</sup> <a name="latestParserVersion" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParserVersion"></a>

```typescript
public readonly latestParserVersion: string;
```

- *Type:* string

---

##### `rollbackAvailable`<sup>Required</sup> <a name="rollbackAvailable" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.rollbackAvailable"></a>

```typescript
public readonly rollbackAvailable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `autoUpgradeDisabledInput`<sup>Optional</sup> <a name="autoUpgradeDisabledInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput"></a>

```typescript
public readonly autoUpgradeDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoUpgradeDisabled`<sup>Required</sup> <a name="autoUpgradeDisabled" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled"></a>

```typescript
public readonly autoUpgradeDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserVersionInfo;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---



