# `dialogflowCxToolVersion` Submodule <a name="`dialogflowCxToolVersion` Submodule" id="@cdktn/provider-google.dialogflowCxToolVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxToolVersion <a name="DialogflowCxToolVersion" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version google_dialogflow_cx_tool_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersion(scope: Construct, id: string, config: DialogflowCxToolVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig">DialogflowCxToolVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig">DialogflowCxToolVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.putTool">putTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxToolVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a>

---

##### `putTool` <a name="putTool" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.putTool"></a>

```typescript
public putTool(value: DialogflowCxToolVersionTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.putTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowCxToolVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isConstruct"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

dialogflowCxToolVersion.DialogflowCxToolVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformElement"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformResource"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DialogflowCxToolVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxToolVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxToolVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowCxToolVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference">DialogflowCxToolVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference">DialogflowCxToolVersionToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.toolInput">toolInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxToolVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference">DialogflowCxToolVersionTimeoutsOutputReference</a>

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.tool"></a>

```typescript
public readonly tool: DialogflowCxToolVersionToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference">DialogflowCxToolVersionToolOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxToolVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a>

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.toolInput"></a>

```typescript
public readonly toolInput: DialogflowCxToolVersionTool;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxToolVersionConfig <a name="DialogflowCxToolVersionConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionConfig: dialogflowCxToolVersion.DialogflowCxToolVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the tool version. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.parent">parent</a></code> | <code>string</code> | The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a></code> | tool block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#id DialogflowCxToolVersion#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the tool version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#display_name DialogflowCxToolVersion#display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#parent DialogflowCxToolVersion#parent}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.tool"></a>

```typescript
public readonly tool: DialogflowCxToolVersionTool;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#tool DialogflowCxToolVersion#tool}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#deletion_policy DialogflowCxToolVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#id DialogflowCxToolVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxToolVersionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#timeouts DialogflowCxToolVersion#timeouts}

---

### DialogflowCxToolVersionTimeouts <a name="DialogflowCxToolVersionTimeouts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionTimeouts: dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#create DialogflowCxToolVersion#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#delete DialogflowCxToolVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#create DialogflowCxToolVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#delete DialogflowCxToolVersion#delete}.

---

### DialogflowCxToolVersionTool <a name="DialogflowCxToolVersionTool" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionTool: dialogflowCxToolVersion.DialogflowCxToolVersionTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.description">description</a></code> | <code>string</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a></code> | open_api_spec block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#description DialogflowCxToolVersion#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#display_name DialogflowCxToolVersion#display_name}

---

##### `dataStoreSpec`<sup>Optional</sup> <a name="dataStoreSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.dataStoreSpec"></a>

```typescript
public readonly dataStoreSpec: DialogflowCxToolVersionToolDataStoreSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#data_store_spec DialogflowCxToolVersion#data_store_spec}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.functionSpec"></a>

```typescript
public readonly functionSpec: DialogflowCxToolVersionToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#function_spec DialogflowCxToolVersion#function_spec}

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: DialogflowCxToolVersionToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#open_api_spec DialogflowCxToolVersion#open_api_spec}

---

### DialogflowCxToolVersionToolDataStoreSpec <a name="DialogflowCxToolVersionToolDataStoreSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolDataStoreSpec: dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections">dataStoreConnections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]</code> | data_store_connections block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections"></a>

```typescript
public readonly dataStoreConnections: IResolvable | DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#data_store_connections DialogflowCxToolVersion#data_store_connections}

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt"></a>

```typescript
public readonly fallbackPrompt: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#fallback_prompt DialogflowCxToolVersion#fallback_prompt}

---

### DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections <a name="DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolDataStoreSpecDataStoreConnections: dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore">dataStore</a></code> | <code>string</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">documentProcessingMode</a></code> | <code>string</code> | The document processing mode for the data store connection. |

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#data_store DialogflowCxToolVersion#data_store}

---

##### `dataStoreType`<sup>Optional</sup> <a name="dataStoreType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#data_store_type DialogflowCxToolVersion#data_store_type}

---

##### `documentProcessingMode`<sup>Optional</sup> <a name="documentProcessingMode" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```typescript
public readonly documentProcessingMode: string;
```

- *Type:* string

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#document_processing_mode DialogflowCxToolVersion#document_processing_mode}

---

### DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt <a name="DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolDataStoreSpecFallbackPrompt: dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt = { ... }
```


### DialogflowCxToolVersionToolFunctionSpec <a name="DialogflowCxToolVersionToolFunctionSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolFunctionSpec: dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>string</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#input_schema DialogflowCxToolVersion#input_schema}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#output_schema DialogflowCxToolVersion#output_schema}

---

### DialogflowCxToolVersionToolOpenApiSpec <a name="DialogflowCxToolVersionToolOpenApiSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpec: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>string</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#text_schema DialogflowCxToolVersion#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.authentication"></a>

```typescript
public readonly authentication: DialogflowCxToolVersionToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#authentication DialogflowCxToolVersion#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#service_directory_config DialogflowCxToolVersion#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: DialogflowCxToolVersionToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#tls_config DialogflowCxToolVersion#tls_config}

---

### DialogflowCxToolVersionToolOpenApiSpecAuthentication <a name="DialogflowCxToolVersionToolOpenApiSpecAuthentication" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecAuthentication: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#api_key_config DialogflowCxToolVersion#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#bearer_token_config DialogflowCxToolVersion#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#oauth_config DialogflowCxToolVersion#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#service_agent_auth_config DialogflowCxToolVersion#service_agent_auth_config}

---

### DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#key_name DialogflowCxToolVersion#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#request_location DialogflowCxToolVersion#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#api_key DialogflowCxToolVersion#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#secret_version_for_api_key DialogflowCxToolVersion#secret_version_for_api_key}

---

### DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | Optional. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#secret_version_for_token DialogflowCxToolVersion#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#token DialogflowCxToolVersion#token}

---

### DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#client_id DialogflowCxToolVersion#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#oauth_grant_type DialogflowCxToolVersion#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#token_endpoint DialogflowCxToolVersion#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#client_secret DialogflowCxToolVersion#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#scopes DialogflowCxToolVersion#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#secret_version_for_client_secret DialogflowCxToolVersion#secret_version_for_client_secret}

---

### DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#service_agent_auth DialogflowCxToolVersion#service_agent_auth}

---

### DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig <a name="DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#service DialogflowCxToolVersion#service}

---

### DialogflowCxToolVersionToolOpenApiSpecTlsConfig <a name="DialogflowCxToolVersionToolOpenApiSpecTlsConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecTlsConfig: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts"></a>

```typescript
public readonly caCerts: IResolvable | DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#ca_certs DialogflowCxToolVersion#ca_certs}

---

### DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts <a name="DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

const dialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts: dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:
```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#cert DialogflowCxToolVersion#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_cx_tool_version#display_name DialogflowCxToolVersion#display_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxToolVersionTimeoutsOutputReference <a name="DialogflowCxToolVersionTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxToolVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTimeouts">DialogflowCxToolVersionTimeouts</a>

---


### DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList <a name="DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get"></a>

```typescript
public get(index: number): DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]

---


### DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference <a name="DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">resetDataStoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">resetDocumentProcessingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataStore` <a name="resetDataStore" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```typescript
public resetDataStore(): void
```

##### `resetDataStoreType` <a name="resetDataStoreType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```typescript
public resetDataStoreType(): void
```

##### `resetDocumentProcessingMode` <a name="resetDocumentProcessingMode" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```typescript
public resetDocumentProcessingMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">documentProcessingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">dataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">documentProcessingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: string;
```

- *Type:* string

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```typescript
public readonly dataStoreTypeInput: string;
```

- *Type:* string

---

##### `documentProcessingModeInput`<sup>Optional</sup> <a name="documentProcessingModeInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```typescript
public readonly documentProcessingModeInput: string;
```

- *Type:* string

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

---

##### `documentProcessingMode`<sup>Required</sup> <a name="documentProcessingMode" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```typescript
public readonly documentProcessingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>

---


### DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference <a name="DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


### DialogflowCxToolVersionToolDataStoreSpecOutputReference <a name="DialogflowCxToolVersionToolDataStoreSpecOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections">putDataStoreConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt">putFallbackPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreConnections` <a name="putDataStoreConnections" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```typescript
public putDataStoreConnections(value: IResolvable | DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]

---

##### `putFallbackPrompt` <a name="putFallbackPrompt" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```typescript
public putFallbackPrompt(value: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections">dataStoreConnections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt">fallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">dataStoreConnectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput">fallbackPromptInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreConnections`<sup>Required</sup> <a name="dataStoreConnections" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```typescript
public readonly dataStoreConnections: DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `fallbackPrompt`<sup>Required</sup> <a name="fallbackPrompt" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```typescript
public readonly fallbackPrompt: DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `dataStoreConnectionsInput`<sup>Optional</sup> <a name="dataStoreConnectionsInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```typescript
public readonly dataStoreConnectionsInput: IResolvable | DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>[]

---

##### `fallbackPromptInput`<sup>Optional</sup> <a name="fallbackPromptInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```typescript
public readonly fallbackPromptInput: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolDataStoreSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a>

---


### DialogflowCxToolVersionToolFunctionSpecOutputReference <a name="DialogflowCxToolVersionToolFunctionSpecOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema"></a>

```typescript
public resetInputSchema(): void
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema"></a>

```typescript
public resetOutputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```typescript
public readonly inputSchemaInput: string;
```

- *Type:* string

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```typescript
public readonly outputSchemaInput: string;
```

- *Type:* string

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a>

---


### DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```typescript
public resetSecretVersionForApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```typescript
public readonly secretVersionForApiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```typescript
public resetSecretVersionForToken(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```typescript
public readonly secretVersionForTokenInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```typescript
public resetSecretVersionForClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```typescript
public readonly secretVersionForClientSecretInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---


### DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```typescript
public putServiceAgentAuthConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```typescript
public resetServiceAgentAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```typescript
public readonly serviceAgentAuthConfigInput: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---


### DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```typescript
public resetServiceAgentAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```typescript
public readonly serviceAgentAuthInput: string;
```

- *Type:* string

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### DialogflowCxToolVersionToolOpenApiSpecOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: DialogflowCxToolVersionToolOpenApiSpecAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: DialogflowCxToolVersionToolOpenApiSpecTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication"></a>

```typescript
public readonly authentication: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: DialogflowCxToolVersionToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecAuthentication">DialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```typescript
public readonly textSchemaInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: DialogflowCxToolVersionToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a>

---


### DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---


### DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList <a name="DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]

---


### DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>

---


### DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference <a name="DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```typescript
public putCaCerts(value: IResolvable | DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```typescript
public readonly caCertsInput: IResolvable | DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecTlsConfig">DialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---


### DialogflowCxToolVersionToolOutputReference <a name="DialogflowCxToolVersionToolOutputReference" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.Initializer"></a>

```typescript
import { dialogflowCxToolVersion } from '@cdktn/provider-google'

new dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putDataStoreSpec">putDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resetDataStoreSpec">resetDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreSpec` <a name="putDataStoreSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putDataStoreSpec"></a>

```typescript
public putDataStoreSpec(value: DialogflowCxToolVersionToolDataStoreSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putDataStoreSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putFunctionSpec"></a>

```typescript
public putFunctionSpec(value: DialogflowCxToolVersionToolFunctionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putOpenApiSpec"></a>

```typescript
public putOpenApiSpec(value: DialogflowCxToolVersionToolOpenApiSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `resetDataStoreSpec` <a name="resetDataStoreSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resetDataStoreSpec"></a>

```typescript
public resetDataStoreSpec(): void
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resetFunctionSpec"></a>

```typescript
public resetFunctionSpec(): void
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.resetOpenApiSpec"></a>

```typescript
public resetOpenApiSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.dataStoreSpec">dataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference">DialogflowCxToolVersionToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference">DialogflowCxToolVersionToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference">DialogflowCxToolVersionToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.toolType">toolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput">dataStoreSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreSpec`<sup>Required</sup> <a name="dataStoreSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.dataStoreSpec"></a>

```typescript
public readonly dataStoreSpec: DialogflowCxToolVersionToolDataStoreSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpecOutputReference">DialogflowCxToolVersionToolDataStoreSpecOutputReference</a>

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.functionSpec"></a>

```typescript
public readonly functionSpec: DialogflowCxToolVersionToolFunctionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpecOutputReference">DialogflowCxToolVersionToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: DialogflowCxToolVersionToolOpenApiSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpecOutputReference">DialogflowCxToolVersionToolOpenApiSpecOutputReference</a>

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.toolType"></a>

```typescript
public readonly toolType: string;
```

- *Type:* string

---

##### `dataStoreSpecInput`<sup>Optional</sup> <a name="dataStoreSpecInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput"></a>

```typescript
public readonly dataStoreSpecInput: DialogflowCxToolVersionToolDataStoreSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolDataStoreSpec">DialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.functionSpecInput"></a>

```typescript
public readonly functionSpecInput: DialogflowCxToolVersionToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolFunctionSpec">DialogflowCxToolVersionToolFunctionSpec</a>

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.openApiSpecInput"></a>

```typescript
public readonly openApiSpecInput: DialogflowCxToolVersionToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOpenApiSpec">DialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxToolVersionTool;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCxToolVersion.DialogflowCxToolVersionTool">DialogflowCxToolVersionTool</a>

---



